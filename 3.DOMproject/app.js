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

    // Remove task event
    // taskList มาจาก ตัวแปรที่เราสร้างเพื่อที่จะ querySelector('.collection')
    // ให้ event ทำงานเมื่อ click และเรียก callback function remveTask ที่เราสร้าง function
    taskList.addEventListener('click', removeTask);

    // Clear task
    clearBtn.addEventListener('click', clearTasks);

    // Fileter task event
    filter.addEventListener('keyup', filterTasks);

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
    // หลังจากที่เรากรอกข้อมูลลงไป เราต้องการให้ระบบ clear ค่าเดิมออกเพื่อที่จะกรอกข้อมูลได้ 
    taskInput.value = '';


    // เป็นการป้องกันไม่ให้ โปรแกรม reflesh หน้าจอ หลังจากที่กด submit 
    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }

}

// Clear tasks
function clearTasks(e) {
    // First way
    // taskList.innerHTML = '';

    // Second way is faster than first way
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    // สร้างตัวแปร text ขึ้นมาเพื่อแปลงค่าให้เป็นตัวเล็กก่อน
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