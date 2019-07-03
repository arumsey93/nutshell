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
        <div id="formContainer">
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
            <fieldset>
            <h1 class="name">${event.name}</h1>
            <h3 class="date">${event.date}</h3>
            <h2 class="location">${event.location}</h2>
            <div class="button-container">
              <button class="delete-event" id="delete-${event.id}">Delete</button>
              <button class="edit-event" id="edit-${event.id}">Edit</button>
            </div>
            </fieldset>`
  }
};
