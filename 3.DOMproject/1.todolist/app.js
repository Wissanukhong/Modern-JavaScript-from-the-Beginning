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
  // Add task event
  form.addEventListener('submit', addTask);

  // Function remove task list
  tasklist.addEventListener('click', removeTask);

  // Function clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Function filter tasks event
  filter.addEventListener('keyup', filterTasks);
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

  // Clear taskInput value
  taskInput.value = '';

  // e.preventDefault จะเป็นการป้องกันการ Reflesh หน้าจอตอนที่เรากด submit
  e.preventDefault();
}

// Function Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Function clear Tasks
function clearTasks() {
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }

  filter.value = '';
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
