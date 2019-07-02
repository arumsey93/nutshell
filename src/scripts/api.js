console.log("API loaded")

export const API = {
  getValues() {
    return fetch("http://localhost:8088/users")
      .then(response => response.json());
  }
}