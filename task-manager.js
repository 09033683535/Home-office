// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterTasks = document.getElementById('filter-tasks');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);
filterTasks.addEventListener('change', filterTaskList);

// Function: Add Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create Task Item
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  // Task Text
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  // Buttons Container
  const buttons = document.createElement('div');
  buttons.classList.add('task-buttons');

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

  // Add Buttons to Task Item
  taskItem.appendChild(buttons);

  // Append Task to List
  taskList.appendChild(taskItem);

  // Clear Input
  taskInput.value = '';
}

// Function: Handle Task Actions
function handleTaskActions(e) {
  const item = e.target;
  const taskItem = item.closest('li');

  if (item.classList.contains('complete-btn')) {
    // Toggle Completed Class
    taskItem.classList.toggle('completed');
  } else if (item.classList.contains('delete-btn')) {
    // Remove Task Item
    taskItem.remove();
  }
}

// Function: Filter Task List
function filterTaskList() {
  const filterValue = filterTasks.value;
  const tasks = taskList.childNodes;

  tasks.forEach(task => {
    if (task.nodeType === 1) { // Ensure it's an element node
      switch (filterValue) {
        case 'all':
          task.style.display = 'flex';
          break;
        case 'completed':
          task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
          break;
        case 'pending':
          task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
          break;
      }
    }
  });
}
