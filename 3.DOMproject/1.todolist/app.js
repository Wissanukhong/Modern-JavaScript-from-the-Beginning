// Define UI Varibals
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LoadEventLisener
loadEventListener();

// Function loadEventListener
function loadEventListener() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add a task');
  }

  // Create li element
  const li = document.createElement('li');

  // Add className
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link Element
  const link = document.createElement('a');

  // Add className
  link.className = 'delete-item secondary-content';

  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  tasklist.appendChild(li);

  // Clear input
  taskInput.value = '';

  //เพื่อไม่ให้โปรแกรมทำการ Load ใหม่ทุกครั้งเวลาที่กด submit
  e.preventDefault;
}
