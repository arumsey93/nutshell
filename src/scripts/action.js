console.log("Action loaded");
import {Comp} from "./comp.js"
import {API} from "./api.js"
import {Event} from "./events.js"
import {dom} from "./dom.js"

let fetchUsers = (name) =>
{
  fetch(`http://localhost:8088/users?username=${name}`)
    .then(data => data.json())
    .then(user => {
        sessionStorage.setItem("activeuser", user[0].id)
    })
}

export const Action = {

  addToDom(container, component) {
    document.querySelector(container).innerHTML = component;
  },

  concatDom(container, component) {
    document.querySelector(container).innerHTML += component;
  },

  addCards(container, component) {
    document.querySelector(container).appendChild(component);
  },

  concatDom(container, component) {
    document.querySelector(container).innerHTML += component;
  },

  logIn() {
    document.querySelector("#log-in").addEventListener("click", () => {
      let logName = document.getElementById("login-name").value
      let logPassword = document.getElementById("login-password").value
      fetch(`http://localhost:8088/users?username=${logName}`)
        .then(data => data.json())
        .then(user => {
          if (!user[0]) {
            alert("That user doesn't exist")
          } else if (user[0].password === logPassword)
            {
              sessionStorage.setItem("activeuser", user[0].id)
              dom.loadDashboard()
            }
            else {
              alert("That password ain't right")
            }
        });
    });
  },

  newUser(username, email, password) {
    return {
      username: username,
      email: email,
      password: password
    };
  },

  newEvent(name, date, location) {
    return {
      name: name,
      date: date,
      location: location
    };
  },

  newTask (taskName, taskDate, taskDescription) {
    return {
    taskName: taskName,
    taskDate: taskDate,
    taskDescription: taskDescription
  };
  },

  register(array) {
    document.querySelector("#register").addEventListener("click", () =>
    {
      let regname = document.getElementById("register-name").value;
      let regemail = document.getElementById("register-email").value;
      let regpassword = document.getElementById("register-password").value;
      let userExists = false
      array.forEach(user =>
      {
        if (user.username === regname || user.email === regemail)
        {
          alert("AAAAAAAAAAA");
          userExists = true
        }
      });
      if (!userExists)
      {
          fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.newUser(regname, regemail, regpassword))
          })
          .then(returnedUsers => returnedUsers.json())
          .then(() => {fetchUsers(regname)})
      }
    });
  },

  changeCard(event) {
      let id = event.target.id.split("-")
    id = +id[1]
    console.log(id)
      let eventName = document.querySelector(`#eventName-${id}`).textContent;
      let eventDate = document.querySelector(`#eventDate-${id}`).textContent;
      let eventLocation = document.querySelector(`#eventLocation-${id}`).textContent;
      const object = Event.newEvent(eventName, eventDate, eventLocation)
      this.addToDom(`#edit-form-container-${id}`, Comp.eventEditCard(object, id))
  },

  editCard(event) {
    let id = event.target.id.split("-")
    id = id[2]
    let eventName = document.querySelector(`#event-name-${id}`).value;
    let eventDate = document.querySelector(`#event-date-${id}`).value;
    let eventLocation = document.querySelector(`#event-location-${id}`).value;
    let userId = +sessionStorage.getItem("activeuser")
    const card = Event.newEvent(eventName, eventDate, eventLocation, userId)
    API.editCard("events", id, card)
},

  onClick(button, callbackFunc) {
    document.querySelector(button).addEventListener("click", callbackFunc)
  }
};


{/* <div id="edit-form-container-${event.id}"></div> */}