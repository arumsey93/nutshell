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
  },
  taskFormComponent() {
    return `
    <div id="task-form-component">
    <label for="taskManager">Task Manager</label>
    <input id="task-name" type="text" placeholder="Task Name">
    <input id="task-date" type="date">
    <textarea name="task-description" id="task-description" rows="4" columns="40"></textarea>
    </div>
    `
  },
  taskListComponent(task) {
    return `
    <div id="task-list-component">
    <label for="taskList">Task List</label>
    <p>Name ${task.name}</p>
    <p>Date ${task.date}</p>
    <p>Description ${task.description}</p>
    <button id="task-delete">Delete</button>
    <button id="task-edit">Edit</button>
    </div>
    `
  }
};
