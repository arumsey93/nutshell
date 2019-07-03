console.log("API loaded")

export const API = {
  getValues() {
    return fetch("http://localhost:8088/users")
      .then(response => response.json());
  },
  postValue(post) {
    return fetch(`http://localhost:8088/${post.user_id}`, {
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