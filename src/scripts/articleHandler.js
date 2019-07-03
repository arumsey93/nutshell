console.log("Joe Kennerly -- articles")
import { Comp } from "./comp.js"
import { API } from "./api.js"

export function articleHandler() {
  document.querySelector("#articles").addEventListener("click", () => {
    API.getValues("articles")
      .then(data => {
        data.forEach(element => {
          document.querySelector("#listContainer").innerHTML += Comp.article(element)
        })
    })
    document.querySelector("#formContainer").innerHTML = Comp.articleForm()

    document.querySelector("#article-save").addEventListener("click", () => {
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