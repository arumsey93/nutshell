import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";
import { chatDOM } from "./message-handler.js"

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
    Action.addToDom("#container", Comp.createDashboardContainer())
    chatDOM()
}

function articlesDOM () {
document.querySelector("#articles").addEventListener("click", () => {
  document.querySelector("#formContainer").innerHTML = Comp.articleForm()
  document.querySelector("#article-save").addEventListener("click", () => {
    console.log("button click")
    let articleTitle = document.querySelector("#articleFormTitle").value
    let articleSynopsis = document.querySelector("#articleFormSynopsis").value
    let articleUrl = document.querySelector("#articleFormUrl").value
    let articleObj = ({
      title: articleTitle,
      synopsis: articleSynopsis,
      url: articleUrl
    })
    API.postValue("articles",articleObj)
    document.querySelector("#listContainer").innerHTML = ""
    fetch("http://localhost:8088/articles")
      .then(data => data.json())
      .then(newData => {
        newData.forEach(article => {
          document.querySelector("#listContainer").innerHTML += Comp.article(article)
        })
      })
  })
})
}