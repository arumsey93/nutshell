import { Comp } from "./comp.js";
import { Action } from "./action.js";
import {Event} from "./events.js"

export const dom = {
  loadDashboard() {
    let state = +sessionStorage.getItem("activeuser")
    Action.addToDom("#container", Comp.createDashboardContainer())
    Event.navHandler(state)
  }
}