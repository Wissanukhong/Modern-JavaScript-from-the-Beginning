// Document.getElemantById('ID')
document.getElementById('main')

// Get things from the element
document.getElementById('main').id;
console.log(document.getElementsByClassName('card-content')[0]);

// Change style
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
document.getElementById('task-title').style.textTransform = 'uppercase';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My task';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
document.querySelector('#task-title'); // query selector by ID
document.querySelector('.card-title'); // query selector by className
document.querySelector('h5'); // query selector by HTML Tag