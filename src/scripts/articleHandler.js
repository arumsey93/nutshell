// Author: Joe Kennerly
// Handles all newsfeed components
import { Comp } from "./comp.js";
import { API } from "./api.js";
import { Action } from "./action.js";

export function articleHandler() {
  // When articles button clicked
  document.querySelector("#articles").addEventListener("click", () => {
    // Load articles; convert to js array
    API.getValues("articles").then(data => {
      //Loop through array, +=ing each article
      data.forEach(element => {
        Action.concatDom("#listContainer", Comp.article(element))
        // deleteHandler(element.id)
      })
      console.log(data)
    })

    // Add form to dom
    Action.addToDom("#formContainer", Comp.articleForm());

    // Post Handler
    document.querySelector("#article-save").addEventListener("click", () => {
      let articleObj = {
        title: document.querySelector("#articleFormTitle").value,
        synopsis: document.querySelector("#articleFormSynopsis").value,
        url: document.querySelector("#articleFormUrl").value
      }
      API.postValue("articles", articleObj);
      document.querySelector("#listContainer").innerHTML = ""
      API.getValues("articles").then(newData =>
        newData.forEach(article => Action.concatDom("#listContainer", Comp.article(article))))
    })
  })
}
// Delete Handler
function deleteHandler(id) {
  document
    .querySelector("#article-delete")
    .addEventListener("click", () => console.log("delete", id));
}

// Edit Handler
function editHandler() {
  document
    .querySelector("#article-edit")
    .addEventListener("click", () => console.log("edit"));
}