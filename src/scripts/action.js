console.log("Action loaded");
import { Comp } from "./comp.js"
export const Action = {

  addToDom(container, component) {
    document.querySelector(container).innerHTML = component;
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
              sessionStorage.setItem("activeuser", user[0].id);
              this.addToDom("#container", Comp.createDashboardContainer())
            }
            else
            {
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
        });
        this.addToDom("#container", Comp.createDashboardContainer())
      }
    });
  }
};
