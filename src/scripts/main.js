import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";

let validationArray = [];

API.getValues().then(array => {
  validationArray = array;
});

if (sessionStorage.length === 0) {
  Action.addToDom("#container", Comp.welcomeComponent());
  document
    .getElementById("welcome-register")
    .addEventListener("click", event => {
      Action.addToDom("#container", Comp.registerComponent());
      Action.register(validationArray);
    });
  document.getElementById("welcome-login").addEventListener("click", event => {
    Action.addToDom("#container", Comp.loginComponent());
    Action.logIn();
  });
} else {
  Action.addToDom("#container", Comp.createDashboardContainer());
}

function createTask() {
  document.querySelector("#taskButton").addEventListener("click", () => {
    console.log("create task button clicked");
    let taskName = document.querySelector("#task-name").value;
    let taskDate = document.querySelector("#task-date").value;
    let taskDescription = document.querySelector("#task-description").value;
    // Action.addToDom("#container", Comp.taskListComponent("nme"));
    console.log(taskName, taskDate, taskDescription);
    let taskObj = {
      taskName: taskName,
      taskDate: taskDate,
      taskDescription: taskDescription
    };
    API.postValue("tasks", taskObj);
    document.querySelector("#container").innerHTML = "";
    fetch("http://localhost:8088/tasks")
      .then(data => data.json())
      .then(newData => {
        newData.forEach(task => {
          document.querySelector(
            "#container"
          ).innerHTML = Comp.taskListComponent(
            taskName,
            taskDate,
            taskDescription
          );
        });
      });
  });
}

document.querySelector("#tasks").addEventListener("click", () => {
  console.log("task button clicked");
  Action.addToDom("#container", Comp.taskFormComponent());
  createTask();
});

document.querySelector("#articles").addEventListener("click", () => {
  document.querySelector("#formContainer").innerHTML = Comp.articleForm();
  document.querySelector("#article-save").addEventListener("click", () => {
    console.log("button click");
    let articleTitle = document.querySelector("#articleFormTitle").value;
    let articleSynopsis = document.querySelector("#articleFormSynopsis").value;
    let articleUrl = document.querySelector("#articleFormUrl").value;
    let articleObj = {
      title: articleTitle,
      synopsis: articleSynopsis,
      url: articleUrl
    };
    API.postValue("articles", articleObj);
    document.querySelector("#listContainer").innerHTML = "";
    fetch("http://localhost:8088/articles")
      .then(data => data.json())
      .then(newData => {
        newData.forEach(article => {
          document.querySelector("#listContainer").innerHTML += Comp.article(
            article
          );
        });
      });
  });
});
