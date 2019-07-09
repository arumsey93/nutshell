import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";
import {taskHandler} from "./taskHandler.js"
import { chatDOM } from "./message-handler.js"
import {dom} from "./dom.js"
import {Event} from "./events.js"

let validationArray = [];

API.getValues("users").then(array => {
  validationArray = array;
  console.log(validationArray)
});

if (sessionStorage.length === 0) {
  Action.addToDom("#container", Comp.welcomeComponent());
  document
    .getElementById("welcome-register")
    .addEventListener("click", event => {
      Action.addToDom("#container", Comp.registerComponent());
      Action.register(validationArray);
      Event.navHandler()
    })
    document.getElementById("welcome-login").addEventListener("click", event => {
      Action.addToDom("#container", Comp.loginComponent())
      Action.logIn();
      Event.navHandler()
    })
} else {
  dom.loadDashboard()
  // chatDOM()
}
