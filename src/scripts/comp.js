console.log("Comp Loaded");

export const Comp = {
  welcomeComponent() {
    return `
    <button id="welcome-register">Register</button>
    <button id="welcome-login">Log In</button>`;
  },
  createDashboardContainer() {
    return `
        <nav>This is the nav bar</nav>
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
  chatFormComponent() {
    return `
    <div id="chat-form-container">
      <label for="chat-form-container">Enter Your Message:</label>
      <textarea name="chat-form" id="chat-form" rows="5" columns="60"></textarea>
      <button id="chatPostBtn">Send Message</button>
      </div>
    `
  },
  chatListComponent() {
    return `
    <div id="chat-list-container">
    </div>
    `
  }
};
