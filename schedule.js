// DOM Elements
const eventTitleInput = document.getElementById('event-title');
const eventDateInput = document.getElementById('event-date');
const addEventBtn = document.getElementById('add-event-btn');
const scheduleList = document.getElementById('schedule-list');

// Event Listeners
addEventBtn.addEventListener('click', addEvent);
scheduleList.addEventListener('click', handleEventActions);

// Function: Add Event
function addEvent() {
  const title = eventTitleInput.value.trim();
  const date = eventDateInput.value;

  if (title === '' || date === '') {
    alert('Please provide both a title and a date!');
    return;
  }

  // Create Event Item
  const eventItem = document.createElement('li');

  // Event Details
  const eventDetails = document.createElement('div');
  eventDetails.innerHTML = `<strong>${title}</strong> - <em>${new Date(date).toDateString()}</em>`;
  eventItem.appendChild(eventDetails);

  // Buttons Container
  const buttons = document.createElement('div');
  buttons.classList.add('schedule-buttons');

  // Complete Button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('complete-btn');
  buttons.appendChild(completeBtn);

  // Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  buttons.appendChild(deleteBtn);

  // Add Buttons to Event Item
  eventItem.appendChild(buttons);

  // Append Event to List
  scheduleList.appendChild(eventItem);

  // Clear Inputs
  eventTitleInput.value = '';
  eventDateInput.value = '';
}

// Function: Handle Event Actions
function handleEventActions(e) {
  const item = e.target;
  const eventItem = item.closest('li');

  if (item.classList.contains('complete-btn')) {
    // Toggle Completed Class
    eventItem.classList.toggle('completed');
  } else if (item.classList.contains('delete-btn')) {
    // Remove Event Item
    eventItem.remove();
  }
}
