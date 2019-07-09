// Author: Joe Kennerly
// Handles all newsfeed components
import { Comp } from "./comp.js";
import { API } from "./api.js";
import { Action } from "./action.js";

export const article = {
  navHandler(state) {
    // When articles button clicked
    console.log("hi")
    document.querySelector("#articles").addEventListener("click", () => {
      // Add form to dom
      document.querySelector("#listContainer").innerHTML = ""
      Action.addToDom("#formContainer", Comp.articleForm());
      API.getValues("articles").then(data => {
        //Loop through array, +=ing each article
        data.forEach(element => {
          Action.concatDom("#listContainer", Comp.article(element));
        })
      })
      this.enablePost();
      this.enableDelete();
      this.enableEdit()
    });
  },

  loadArticles() {
    // Load articles; convert to js array
    API.getValues("articles").then(data => {
      //Loop through array, +=ing each article
      data.forEach(element => {
        Action.concatDom("#listContainer", Comp.article(element));
      })
    })
  },

  // Post Handler
  enablePost() {
    document.querySelector("#article-save").addEventListener("click", () => {
      console.log("hello");
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
    document.querySelector("#container").addEventListener("click", event => {
        let id = event.target.id
        if (id.startsWith("article-delete-")) {
          id = +id.split("-")[2]
          console.log("delete", id)
          API.deleteValue("articles", id)
          document.querySelector("#listContainer").innerHTML = ""
          API.getValues("articles").then(newData =>
            newData.forEach(article =>
              Action.concatDom("#listContainer", Comp.article(article))
            )
          );
        }
      });
  },

  // Edit Handler
  enableEdit() {
    document.querySelector("#container").addEventListener("click", event => {
      let id = event.target.id;
      if (id.startsWith("article-edit-")) {
        id = +id.split("-")[2]
        console.log("edit", id);
        document.querySelector(`#article-component-${id}`).innerHTML = ""
        document.querySelector(`#article-component-${id}`).innerHTML = Comp.articleEditForm()
        document.querySelector("#article-edit").addEventListener("click", () => {
          let newObj = {
            title: document.querySelector("#articleEditTitle").value,
            synopsis: document.querySelector("#articleEditSynopsis").value,
            url: document.querySelector("#articleEditUrl").value
          }
          console.log(newObj)
          API.editValue("articles", id, newObj)
          document.querySelector("#listContainer").innerHTML = ""
          API.getValues("articles").then(newData => {
            console.log(newData)
            newData.forEach(article => Action.concatDom("#listContainer", Comp.article(article)))
          })

        })
      }
    });
  }
};
