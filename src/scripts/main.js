import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";

let validationArray = [];

API.getValues().then(array => {
  validationArray = array;
});

if (sessionStorage.length === 0)
{
    Action.addToDom("#container", Comp.welcomeComponent())
    document.getElementById("welcome-register").addEventListener("click", event => {
      Action.addToDom("#container", Comp.registerComponent())
      Action.register(validationArray);
    })

    document.getElementById("welcome-login").addEventListener("click", event => {
      Action.addToDom("#container", Comp.loginComponent())
      Action.logIn();
    })
    // document.getElementById("welcome-login").addEventListener("click", event => {
    //   Action.addToDom("#container", Comp.loginComponent());
    //   Action.logIn();
    // });
}
else {
    Action.addToDom("#container", Comp.createDashboardContainer())
}

document.querySelector("#articles").addEventListener("click", () => {
  console.log("button click")
  document.querySelector("#formContainer").innerHTML = Comp.articleForm()
})

// let activeUser = sessionStorage.getItem("activeuser")

// if (activeUser) {
// }