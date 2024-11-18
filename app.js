// Task Manager
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Collaboration
const collabBox = document.getElementById('collab-box');
collabBox.addEventListener('input', () => {
  console.log(`Collaboration input: ${collabBox.value}`);
});

// Scheduling
const meetingTime = document.getElementById('meeting-time');
const meetingOutput = document.getElementById('meeting-output');

meetingTime.addEventListener('change', () => {
  meetingOutput.textContent = `Meeting scheduled for: ${meetingTime.value}`;
});

// Notifications
const toggleFocusButton = document.getElementById('toggle-focus');
const focusStatus = document.getElementById('focus-status');
let isFocusMode = false;

toggleFocusButton.addEventListener('click', () => {
  isFocusMode = !isFocusMode;
  focusStatus.textContent = `Focus mode is ${isFocusMode ? 'ON' : 'OFF'}.`;
});

// Wellness
setInterval(() => {
  alert('Time to take a break and stretch!');
}, 3600000); // Alerts every hour (3600000ms)
