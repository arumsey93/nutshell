import { dom } from "./dom.js"
import { API } from "./api.js"

let validationArray = [];

API.getValues("users").then(array => {
  validationArray = array;
});

if (sessionStorage.length === 0) {
    Action.addToDom("#container", Comp.welcomeComponent())
    document.getElementById("welcome-register").addEventListener("click", event => {
      Action.addToDom("#container", Comp.registerComponent())
      Action.register(validationArray);
    })
    document.getElementById("welcome-login").addEventListener("click", event => {
      Action.addToDom("#container", Comp.loginComponent())
      Action.logIn();
    })
} else {
  dom.loadDashboard()
}
