import { API } from "./api.js"
import { Comp } from "./comp.js"

export function chatDOM () {
    document.querySelector("#messages").addEventListener("click", () => {
      API.getValues("message")
        .then(data => {
          console.log(data)
          data.forEach(element => {
            document.querySelector("#listContainer").innerHTML += Comp.chatListComponent(element)
          })
        })
      document.querySelector("#formContainer").innerHTML = Comp.chatFormComponent()

      document.querySelector("#chatPostBtn").addEventListener("click", () => {
        let messageArea = document.querySelector("#chat-form").value
        let messageObj = ({
          message: messageArea
        })
        API.postValue("message", messageObj)
        document.querySelector("#listContainer").innerHTML = ""
        fetch("http://localhost:8088/message")
          .then(data => data.json())
          .then(newData => {
            newData.forEach(chat => {
              document.querySelector("#listContainer").innerHTML += Comp.chatListComponent(chat)
            })
          })
      })
    })
    }