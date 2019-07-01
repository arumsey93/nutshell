function getValues() {
  return fetch("http://localhost:8088/users").then(response => response.json());
}

let validationArray = [];

getValues().then(array => {
  console.log(array);
  validationArray = array;
  console.log(validationArray);
});

function logIn() {
  document.querySelector("#log-in").addEventListener("click", () => {
    console.log("click");
    let logName = document.getElementById("login-name").value
    let logPassword = document.getElementById("login-password").value
    console.log(logPassword)
    console.log(logName)
    fetch(`http://localhost:8088/users?username=${logName}`)
      .then(data => data.json())
      .then(user => {
          if (user[0].password === logPassword)
          {
            sessionStorage.setItem("activeuser", user[0].id);
            console.log("hello")
            console.log(sessionStorage.getItem("activeuser"));
          }
          else
          {
              alert("That password ain't right")
          }
        console.log(user)
      });
  });
}

function newUser(username, email, password) {
  return {
    username: username,
    email: email,
    password: password
  };
}

function register() {
  document.querySelector("#register").addEventListener("click", () =>
  {
    let regname = document.getElementById("register-name").value;
    let regemail = document.getElementById("register-email").value;
    let regpassword = document.getElementById("register-password").value;
    let userExists = false
    validationArray.forEach(user =>
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
          // Replace "url" with your API's URL
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser(regname, regemail, regpassword))
        });
    }
    console.log("click");
  });
}

function registerComponent()
{
    return `
    <div id="register-container">
        <input id="register-name" type="text" placeholder="Username">
        <input id="register-email" type="text" placeholder="Email">
        <input id="register-password" type="text" placeholder="Password">
      <button id="register">Register</button>
    </div>`
}

function loginComponent()
{
    return `
    <div id="login-container">
        <input id="login-name" type="text" placeholder="Username">
        <input id="login-password" type="text" placeholder="Password">
        <button id="log-in">Log In</button>
    </div>`
}

function welcomeComponent()
{
    return `
    <button id="welcome-register">Register</button>
    <button id="welcome-login">Log In</button>`
}

function addToDom(container, component)
{
    document.querySelector(container).innerHTML = component
}

// let addThing = document.querySelector("#container")
addToDom("#container", welcomeComponent())

document.getElementById("welcome-register").addEventListener("click", event =>
{
    addToDom("#container", registerComponent())
    register();
})

document.getElementById("welcome-login").addEventListener("click", event =>
{
    addToDom("#container", loginComponent())
    logIn();
})
