import { API } from "./api.js"
import { Comp } from "./comp.js"

export function chatDOM () {
    document.querySelector("#messages").addEventListener("click", () => {
      API.getValues("message")
        .then(data => {
          data.forEach(element => {
            console.log(element)
            document.querySelector("#listContainer").innerHTML += Comp.chatListComponent(element)
            })
            document.querySelector("#listContainer").addEventListener("click", (chat) => {
                // debugger
                if (event.target.id.startsWith("chat-edit")) {
                    console.log(event.target.id)
                    let chatID = +event.target.id.split("-")[2]
                    console.log("this is chat ID", chatID)
                    let messageText = document.querySelector(`#message-${chatID}`).textContent
                    let tempObj = {
                        message: messageText,
                        id: chatID,
                        user_ID: sessionStorage.getItem("activeuser")
                    }
                    document.querySelector(`#chat-list-container-${chatID}`).innerHTML = chatEditForm(tempObj)
                }
                   if (event.target.id.startsWith("edit-form-btn")){
                       console.log("yo")
                       let messageId = +event.target.id.split("-")[3]
                       let newObject = {}
                       API.getOneThing("message", messageId)
                       .then(retrievedMessage => {
                           newObject = retrievedMessage;
                           return newObject;
                       })
                       .then(res => {
                           console.log(res)
                           res.message = document.getElementById(`chat-form-edit-${messageId}`).value
                           console.log(res)
                           return res;
                       })
                       .then(res => API.editMessage("message", messageId, res))
                       .then( () => {{API.getValues("message")
                       .then(data => {
                           document.querySelector("#listContainer").innerHTML = ""
                           data.forEach(element => {
                           document.querySelector("#listContainer").innerHTML += Comp.chatListComponent(element)
                           })
                       })}})
                   }
            })
            document.querySelector("#formContainer").innerHTML = Comp.chatFormComponent()
            document.querySelector("#chatPostBtn").addEventListener("click", () => {
                let messageArea = document.querySelector("#chat-form").value
                let userID = sessionStorage.getItem("activeuser")
                let messageObj = (messageArea, userID) => {
                    return {
                        message: messageArea,
                        user_ID: userID
                    }
                }
                document.querySelector("#listContainer").innerHTML = ""
                API.postValue("message", messageObj(messageArea, userID))
                .then(data => data.json())
                .then (() => {
                    fetch ("http://localhost:8088/message")
                    .then(data => data.json())
                    .then(newData => {
                        newData.forEach(chat => {
                            console.log(chat.id)
                            document.querySelector("#listContainer").innerHTML += Comp.chatListComponent(chat)
                        })
                    })
                })
            })
        })
    })
}

function chatEditForm(message) {
   return `
   <fieldset>
   <label for="chat-form-edit-container">Enter Your Message:</label>
   <textarea name="chat-form-edit" id="chat-form-edit-${message.id}" rows="5" columns="60">${message.message}</textarea>
   <input type="hidden" id="message-id" value=${message.id}>
   <input type="hidden" id="edit-user-id" value=${message.user_ID}>
   <button id="edit-form-btn-${message.id}">Save</button>
   </fieldset
   `
}