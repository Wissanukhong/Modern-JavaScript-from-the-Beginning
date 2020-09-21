// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
// first style
document.getElementById('task-title').style.background = '#333';
// Second style
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// querySelector
document.querySelector('#task-title'); // query by id
document.querySelector('.task-title'); // query by className
document.querySelector('h5'); // query by tag element

// quierySelector with pseudo classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(3)').textContent = 'Hello world';
document.querySelector('li:nth-child(3)').style.background = '#ccc';