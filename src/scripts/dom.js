import { Comp } from "./comp.js";
import { Action } from "./action.js";
import { article } from "./articleHandler.js";

export const dom = {
  loadDashboard() {
    let state = +sessionStorage.getItem("activeuser")
    Action.addToDom("#container", Comp.createDashboardContainer())
    article.navHandler(state)
  }
}