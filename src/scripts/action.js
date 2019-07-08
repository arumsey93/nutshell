console.log("Action loaded");
import {Comp} from "./comp.js"
import {API} from "./api.js"
let fetchUsers = (name) =>
{
  fetch(`http://localhost:8088/users?username=${name}`)
    .then(data => data.json())
    .then(user => {
        sessionStorage.setItem("activeuser", user[0].id)
        Action.addToDom("#container", Comp.createDashboardContainer())
        // Action.createEvent()
    })
}

export const Action = {

  addToDom(container, component) {
    document.querySelector(container).innerHTML = component;
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
          } else if (user[0].password === logPassword) {
              sessionStorage.setItem("activeuser", user[0].id)
              this.addToDom("#container", Comp.createDashboardContainer())
              // this.createEvent()
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

  createEvent() {
    document.querySelector("#create-event").addEventListener("click", () =>
    {
      let eventName = document.getElementById("event-name").value;
      let eventDate = document.getElementById("event-date").value;
      let eventLocation = document.getElementById("event-location").value;
      fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.newEvent(eventName, eventDate, eventLocation))
      })
      .then(returnedEvents => returnedEvents.json())
      .then(() => {this.addEvent()})
    })
  },

  addEvent() {
    API.getEvents()
    .then(events => {
      document.querySelector("#listContainer").innerHTML = ""
      events.forEach(event => {
        console.log("event", event)
        const eventContainer = document.createElement("div")
        eventContainer.innerHTML = Comp.eventCard(event)
        this.addCards("#listContainer", eventContainer)
      })
      this.eventEvent()
    })
  },

  eventEvent() {
    document.querySelector("#listContainer").addEventListener("click", event => {
      let id = event.target.id
      if (event.target.id.startsWith("edit-")){
        let eventName = document.querySelector("#event-name").value;
        let eventDate = document.querySelector("#event-date").value;
        let eventLocation = document.querySelector("#event-location").value;
        const card = this.newEvent(eventName, eventDate, eventLocation)
        id = id.split("-")
        API.editCard("events", id[1], card)
      }
      else if (event.target.id.startsWith("delete-"))
      {
        id = id.split("-")
        API.deleteCard("events", id[1])
      }

    })

  },

  onClick(button, callbackFunc) {
    document.querySelector(button).addEventListener("click", callbackFunc)
  }
};
