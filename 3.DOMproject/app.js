// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#fileter');
const taskInput = document.querySelector('#task');

// Load all event listeners
// เป็นการเลือกใช้งานแบบ Callback function
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
        alert('Test');
    }

    e.preventDefault();
}
