// Author: Joe Kennerly
// Handles all newsfeed components
import { Comp } from "./comp.js";
import { API } from "./api.js";
import { Action } from "./action.js";

export const article = {
  navHandler() {
    // When articles button clicked
    document.querySelector("#articles").addEventListener("click", () => {
      // Add form to dom
      Action.addToDom("#formContainer", Comp.articleForm());
      this.loadArticles()
      this.enablePost()
    });
  },

  loadArticles() {
    // Load articles; convert to js array
    API.getValues("articles")
    .then(data => {
      //Loop through array, +=ing each article
      data.forEach(element => {
        Action.concatDom("#listContainer", Comp.article(element))
        this.enableEdit()
        this.enableDelete()
      });
    })
  },


  // Post Handler
  enablePost() {
    document.querySelector("#article-save").addEventListener("click", () => {
      console.log("hello")
      let articleObj = {
        title: document.querySelector("#articleFormTitle").value,
        synopsis: document.querySelector("#articleFormSynopsis").value,
        url: document.querySelector("#articleFormUrl").value
      };
      API.postValue("articles", articleObj);
      document.querySelector("#listContainer").innerHTML = "";
      API.getValues("articles").then(newData =>
        newData.forEach(article =>
          Action.concatDom("#listContainer", Comp.article(article))
        )
      );
    });
  },

  // Delete Handler
  enableDelete() {
    document
      .querySelector("#article-delete")
      .addEventListener("click", (event) => {
        let id = event.target.id
        console.log("delete", id)
      })
  },

  // Edit Handler
  enableEdit() {
    document
      .querySelector("#article-edit")
      .addEventListener("click", () => console.log("edit"));
  }
};
