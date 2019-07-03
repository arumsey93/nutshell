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

  eventCard(event)
  {
    return `
            <fieldset id="edit-form-container-${event.id}">
              <h1 class="name" id="eventName-${event.id}">${event.name}</h1>
              <h3 class="date" id="eventDate-${event.id}">${event.date}</h3>
              <h2 class="location" id="eventLocation-${event.id}">${event.location}</h2>
              <div class="button-container">
                <button class="delete-event" id="delete-${event.id}">Delete</button>
                <button class="edit-event" id="edit-${event.id}">Edit</button>
              </div>
            </fieldset>`
  },

  eventEditCard(object, id)
  {
    console.log(object, id)
    return `
              <label for="journalDate">Name</label>
              <input type="text" name="eventName" id="event-name-${id}" value="${object.name}" required/>
              <label for="journalConcepts">Date</label>
              <input type="date" name="eventDate" id="event-date-${id}" value="${object.date}" required>
              <label for="journalEntry">Location</label>
              <input type="text" name="eventLocation" id="event-location-${id}" value="${object.location}" required>
              <div class="eventcreate">
                <input id="update-event-${id}" type="button" value="Update Event">
              </div>`
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

  eventForm()
  {
    return `<div id="formContainer">
          <fieldset>
          <label for="journalDate">Name</label>
          <input type="text" name="eventName" id="event-name" required/>
          <label for="journalConcepts">Date</label>
          <input type="date" name="eventDate" id="event-date" required>
          <label for="journalEntry">Location</label>
          <input type="text" name="eventLocation" id="event-location" required>
          <div class="eventcreate">
            <input id="create-event" type="button" value="Create Event">
          </div>
        </fieldset>
        </div>
        <div id="listContainer"></div>`
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
