// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#fileter');
const taskInput = document.querySelector('#task');

// Load all event listeners
// เป็นการเรียกใช้งานแบบ Callback function
loadEventListeners();

// Load all event listeners
// เราจะเขียนโปรแกรมข้างใน function นี้มีอะไรบ้าง 
function loadEventListeners() {

    // Add task event
    // form มาจาก form html ที่มี type input เป็น submit 
    // addTask เป็น callback function ที่เรียก Listener มาใช้งาน
    form.addEventListener('submit', addTask)

}

// Add Task
// (e) คือ event ที่จะบอกว่าเราต้องการทำอะไรกับ event
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create element
    const li = document.createElement('li');

    // Add class to const li 
    li.className = 'collection-item';

    // Create text node and append to li
    // taskInput.value เป็นการเรียกใช้ค่าจากตัวแปรที่สร้างไว้ ภายในนอก Function 
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // Add class to const like 
    link.className = 'delete-item secondary-content';

    // Add icon to html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li 
    li.appendChild(link);

    // Append li to ul
    // เรียก ตัวแปรที่เราสร้างไว้มาใช้งาน โดยการแทรก(appendChild) li ที่เราสร้างไว้ลงไป
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';


    // เป็นการป้องกันไม่ให้ โปรแกรม reflesh หน้าจอ หลังจากที่กด submit 
    e.preventDefault();
}
