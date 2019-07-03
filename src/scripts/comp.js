console.log("Comp Loaded");

export const Comp = {
  welcomeComponent() {
    return `
    <button id="welcome-register">Register</button>
    <button id="welcome-login">Log In</button>`;
  },
  createDashboardContainer() {
    return `
    <nav>
      <button id="events">Events</button>
      <button id="articles">Articles</button>
      <button id="tasks">Tasks</button>
      <button id="messages">Messages</button>
      <button id="friends">Friends</button>
    </nav>
    <div id="formContainer"></div>
    <div id="listContainer"></div>
    `;
  },
  registerComponent() {
    return `
    <div id="register-container">
      <input id="register-name" type="text" placeholder="Username">
      <input id="register-email" type="text" placeholder="Email">
      <input id="register-password" type="text" placeholder="Password">
      <button id="register">Register</button>
    </div>`;
  },
  loginComponent() {
    return `
    <div id="login-container">
      <input id="login-name" type="text" placeholder="Username">
      <input id="login-password" type="text" placeholder="Password">
      <button id="log-in">Log In</button>
    </div>`;
  },
  articleForm() {
    return `<div id="article-form">
      <input id ="articleFormTitle" type="text" placeholder="Title"/>
      <input id ="articleFormSynopsis" type="text" placeholder="Synopsis"/>
      <input id ="articleFormUrl" type="text" placeholder="Url"/>
      <button id ="article-save">Post Article</button>
    </div>`
  },
  article(article) {
    return `<div id="article-component">
      <p>Title ${article.title}</p>
      <p>Synopsis ${article.synopsis}</p>
      <p>url ${article.url}</p>
      <button id="article-edit">Edit<button>
      <button id="article-delete">Delete<button>
    </div>`
  }
};
