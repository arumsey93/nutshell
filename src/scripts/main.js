import {API} from "./api.js"
import {Comp} from "./comp.js"
import {Action} from "./action.js"

let validationArray = [];

API.getValues().then(array => {
  validationArray = array;
});

Action.addToDom("#container", Comp.welcomeComponent())

document.getElementById("welcome-register").addEventListener("click", event =>
{
  Action.addToDom("#container", Comp.registerComponent())
  Action.register(validationArray);
})

document.getElementById("welcome-login").addEventListener("click", event =>
{
    Action.addToDom("#container", Comp.loginComponent())
    Action.logIn();
})


