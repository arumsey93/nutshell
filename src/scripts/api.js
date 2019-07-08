import { Action } from "./action";
import { Event } from "./events.js";

console.log("API loaded")

export const API = {
  getValues() {
    return fetch("http://localhost:8088/users")
      .then(response => response.json());
  },

  getEvents() {
    return fetch("http://localhost:8088/events")
      .then(response => response.json());
  },

  deleteCard (name, id) {
    fetch(`http://localhost:8088/${name}/${id}`,
    {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => Event.addEvent())
  },

  // Updates an entry with the passed id with the new values, then displays all the entries to the dom
  editCard (name, id, card)
  {
    fetch(`http://localhost:8088/${name}/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
    })
    .then(() => Event.addEvent())
  },

  postValue(resource, post) {
    // return fetch(`http://localhost:8088/${resource}/${post.user_id}`, {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
  },

  deleteValue(remove) {
    return fetch(`http://localhost:8088/${remove.user_id}`, {
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
  },

  editValue(edit) {
    return fetch(`http://localhost:8088/${edit.user_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(edit)
    })
      .then((data) => data.json())
  }
}