export const article = {

    navHandler() {
      // When articles button clicked
      document.querySelector("#articles").addEventListener("click", () => {
        // Add form to dom
        Action.addToDom("#formContainer", Comp.articleForm());
        // Load articles; convert to js array
        API.getValues("articles").then(data => {
        //Loop through array, +=ing each article
            data.forEach(element => {
                Action.concatDom("#listContainer", Comp.article(element))
                // deleteHandler(element.id)
            })
        })
        })
    }
}
