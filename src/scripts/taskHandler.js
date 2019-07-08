import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";

export const taskHandler = {
  createTask() {
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
        taskDescription: taskDescription,
        isComplete: false
      };
      API.postValue("tasks", taskObj)
        .then(data => data.json)
        .then(() => {
          document.querySelector("#listContainer").innerHTML = "";

          fetch("http://localhost:8088/tasks")
            .then(data => data.json())
            .then(newData => {
              newData.forEach(task => {
                // document.querySelector("#container").innerHTML += Comp.taskListComponent(task);
                const taskContainer = document.createElement("div");
                taskContainer.innerHTML = Comp.taskListComponent(task);
                Action.addCards("#listContainer", taskContainer);
                console.log("post and fetch has worked");
              });
            });
        });

      document
        .querySelector("#listContainer")
        .addEventListener("change", event => {
          console.log("checked");
          let id = event.target.id;
          if (event.target.id.startsWith("delete-")) {
            let taskName = document.querySelector("#task-name").value;
            let taskDate = document.querySelector("#task-date").value;
            let taskDescription = document.querySelector("#task-description")
              .value;
            const card = {
              taskName: taskName,
              taskDate: taskDate,
              taskDescription: taskDescription,
              isComplete: true
            };
            console.log("delete");
            id = id.split("-");
            console.log(+id[1]);
            API.editCard("tasks", +id[1], card);
            taskContainer.innerHTML = "";
            fetch("http://localhost:8088/tasks")
              .then(data => data.json())
              .then(newData => {
                newData.forEach(task => {
                  // document.querySelector("#container").innerHTML += Comp.taskListComponent(task);
                  let taskContainer = document.createElement("div");

                  taskContainer.innerHTML = Comp.taskListComponent(task);
                  Action.addCards("#listContainer", taskContainer);
                  console.log("post and fetch has worked");
                });
              });
          } else if (event.target.id.startsWith("delete-")) {
            id = id.split("-");
            API.deleteCard("tasks", id[1]);
          }
        });
    });
  },
  //when nav task button clicked, switches to task page
  loadTasks() {
    document.querySelector("#tasks").addEventListener("click", () => {
      console.log("task button clicked");
      Action.addToDom("#formContainer", Comp.taskFormComponent());
      this.createTask();
    });
  }
};
