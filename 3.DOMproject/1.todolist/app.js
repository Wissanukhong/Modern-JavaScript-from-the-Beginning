// defint UI vars
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listener
loadEventListeners();

// function loadEventListener
function loadEventListeners() {
  // Function DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Function Add task event
  form.addEventListener('submit', addTask);

  // Function remove task list
  tasklist.addEventListener('click', removeTask);

  // Function clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Function filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Function get tasks from ls
function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    // Add className
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create new link element
    const link = document.createElement('a');
    // Add className
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Apeend the link to li
    li.appendChild(link);

    // Append li to ul
    tasklist.appendChild(li);
  });
}

// Function addTask
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

  // Create new link element
  const link = document.createElement('a');
  // Add className
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Apeend the link to li
  li.appendChild(link);

  // Append li to ul
  tasklist.appendChild(li);

  // Store in LocalStorage
  storeTaskInLocalStorage(taskInput.value);

  // Clear taskInput value
  taskInput.value = '';

  // e.preventDefault จะเป็นการป้องกันการ Reflesh หน้าจอตอนที่เรากด submit
  e.preventDefault();
}

// Function store task to local storage
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Function remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function clear Tasks
function clearTasks() {
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }

  // Function Clear task from local storage
  clearTasksFromLocalStorge();

  filter.value = '';
}

// Function Clear task from local storage
function clearTasksFromLocalStorge() {
  localStorage.clear();
}

// Function filter
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
