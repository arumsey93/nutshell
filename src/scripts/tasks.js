function addTasksToDomComponent() {
return `<div id = "tasks"><p>this is working</p><div>`
}

function addTaskstoDom() {
   let taskDom = document.querySelector("#container") 
   taskDom += addTasksToDomComponent();
}
addTasksToDom();

