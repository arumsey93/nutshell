import { Action } from "./action.js";
import {Comp} from "./comp.js";

console.log("API loaded");

export const API = {
  displayFetch() {
    this.getValues("events")
    .then(array => {
      array.forEach(event => {
        console.log(event)
        Action.concatDom("#listContainer", Comp.eventCard(event))
      })
    })
    this.getValues("tasks")
    this.getValues("articles")
    this.getValues("messages")
  },
  getValues(resourceName) {
    return fetch(`http://localhost:8088/${resourceName}`)
    .then(response => response.json());
  },

  deleteCard(name, id) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => Action.addEvent());
  },

  // Updates an entry with the passed id with the new values, then displays all the entries to the dom
  editCard(name, id, card) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(() => Action.addEvent());
  },

  postValue(resource, post) {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    });
  },

  deleteValue(remove) {
    return fetch(`http://localhost:8088/${remove.user_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  editValue(edit) {
    return fetch(`http://localhost:8088/${edit.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(edit)
    }).then(data => data.json());
  }
};
