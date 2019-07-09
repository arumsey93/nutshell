// import { API } from "./api.js";
// import { Comp } from "./comp.js"

// function newMessage(message, id, user_ID) {
//     return {
//         message: message,
//         id: id,
//         user_ID: sessionStorage.getItem("activeuser")
//     };
// }

// function CreateMessage() {
//     document.querySelector("#chatPostBtn").addEventListener("click", () => {
//         let chatMessage = document.querySelector("#chat-form").value;
//         let id = document.querySelector("#message.id").value;
//         let userID = document.querySelector("#edit-user-id").value
//         fetch("http://localhost:8088/message", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application.json"
//             },
//             body:JSON.stringify(this.newMessage(chatMessage, id, userID))
//         })
//         .then(returnedMessages => returnedMessages.json())
//         .then(() => {this.addMessage()})
//     })
// }


// function addMessage() {
//     API.getValues()
//     .then(messages => {
//         document.querySelector("#listContainer").innerHTML = ""
//         messages.forEach(message => {
//             const messageContainer = document.createElement("div")
//             event.Container.innerHTML = Comp.chatListComponent(message)
//             this.addMessage("#listContainer", messageContainer)
//         })
//         this.messageMessage
//     })
// }

// function messageMessage() {
//     document.querySelector("#listContainer").addEventListener("click", message => {
//         let id = event.target.id
//         if (event.target.id.startsWith("chat-edit")) {
//             id = +id.split("-")[2]
//             let messageText = document.querySelector(`#message-${id}`).textContent
//             newMessage()
//         }
//         document.querySelector(`#chat-list-container-${chatID}`).innerHTML = chatEditForm(newMessage)
//     })
// }
