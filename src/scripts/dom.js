// import { API } from "./api.js";
import { Comp } from "./comp.js";
import { Action } from "./action.js";
import { article } from "./articleHandler.js";
import {Event} from "./events.js"
import {chatDOM} from "./message-handler.js"

export const dom = {
  loadDashboard() {
    let state = +sessionStorage.getItem("activeuser")
    Action.addToDom("#container", Comp.createDashboardContainer())
    article.navHandler(state)
    Event.navHandler(state)
    chatDOM()
    taskHandler.loadTasks()
  }
}