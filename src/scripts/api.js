import { Event } from "./events.js";
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

  getEvents() {
    return fetch("http://localhost:8088/events")
      .then(response => response.json());
  },

  editTask(name, id, card) {
    return fetch(`http://localhost:8088/${name}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)

    }).then(data => data.json())
  },

  getOneThing(resourceName, id) {
    return fetch(`http://localhost:8088/${resourceName}/${id}`)
    .then(data => data.json());
  },

  deleteCard(name, id) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => Event.addEvent())
  },

  // Updates an entry with the passed id with the new values, then displays all the entries to the dom
  editCard(name, id, card) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(() => Event.addEvent())
  },

  editMessage(name, id, card) {
    return fetch(`http://localhost:8088/${name}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }).then(data => data.json())
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

  deleteValue(name, id) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  },

  editValue(name, id, edit) {
    fetch(`http://localhost:8088/${name}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(edit)
    }).then(data => data.json());
  }
};


