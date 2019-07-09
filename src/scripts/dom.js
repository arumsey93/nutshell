import { Comp } from "./comp.js";
import { Action } from "./action.js";
import {Event} from "./events.js"

export const dom = {
  loadDashboard() {
    Action.addToDom("#container", Comp.createDashboardContainer())
    let state = +sessionStorage.getItem("activeuser")
    Event.navHandler(state)
  }
}