//Author: Daniel Krusch
// Handles events

import { Comp } from "./comp.js"
import {API} from "./api.js"
import {Action} from "./action.js";

export const Event = {

    navHandler() {
        // When articles button clicked
        document.querySelector("#events").addEventListener("click", () => {
          // Add form to dom
          document.querySelector("#listContainer").innerHTML = ""
          Action.addToDom("#formContainer", Comp.eventForm());
          // Load articles; convert to js array
          this.addEvent()
          this.createEvent()
          this.eventEvent()
          })
      },

    newEvent(name, date, location, id) {
        return {
          name: name,
          date: date,
          location: location,
          user_id: id
        };
      },

    createEvent() {
        document.querySelector("#create-event").addEventListener("click", () =>
        {
          let eventName = document.getElementById("event-name").value;
          let eventDate = document.getElementById("event-date").value;
          let eventLocation = document.getElementById("event-location").value;
          let userId = +sessionStorage.getItem("activeuser")
          fetch("http://localhost:8088/events", {
            // Replace "url" with your API's URL
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.newEvent(eventName, eventDate, eventLocation, userId))
          })
          .then(returnedEvents => returnedEvents.json())
          .then(() => {this.addEvent()})
        })
      },

      addEvent() {
        API.getEvents()
        .then(events =>
        {
          document.querySelector("#listContainer").innerHTML = ""
          events.forEach(event =>
          {
            const eventContainer = document.createElement("div")
            eventContainer.innerHTML = Comp.eventCard(event)
            Action.addCards("#listContainer", eventContainer)
          })
        })
      },

      eventEvent() {
        console.log("APWOEIFJAOWEIJ")
        document.querySelector("#listContainer").addEventListener("click", event =>
        {
        let id = event.target.id
        if (event.target.id.startsWith("edit-"))
        {
          console.log("hey")
            Action.changeCard(event)
        }
        else if (event.target.id.startsWith("update-event-"))
        {
                console.log("awejfoaiwejf", event)
            Action.editCard(event)
          }
          else if (event.target.id.startsWith("delete-"))
          {
            id = id.split("-")
            API.deleteCard("events", id[1])
          }
        })
      }
}

