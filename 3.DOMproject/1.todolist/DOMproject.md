# DOM To do list project

Project To Do List เป็น Web application ที่พัฒนาด้วยภาษา HTLM, CSS, JavaScript จากการประยุกต์ใช้ความรู้เกี่ยวกับ DOM เพื่อเป็นการจัดการ Tag และ Even ต่างๆ ให้สามารถ Add Task, Remove Task, Filter Task, Clear Task และสามารถเก็บ Tasks ไว้ที่ Local storage database ของ Web browser ได้อีกด้วย

## javaScript method

- `addEventListener ('even', callback function)` วิธีการที่ใช้ในการเพิ่มตัวจัดการเหตุการณ์ที่จะเป็นองค์ประกอบที่ระบุ หรือว่า วิธีการเพิ่มตัวจัดการเหตุการณ์ไม่เขียนทับตัวจัดการเหตุการณ์ที่มีอยู่
- `e.preventDefault()` เอาไว้ Cancel event ที่จะเกิดขึ้น เช่นเวลาเรากดปุ่ม submit form มันจะ refresh หน้า แต่เราไม่ต้องการให้มัน refresh หน้า
- `innerHTML` เป็นการแทรก HTML Tag ลงไปในตำแหน่งที่ต้องการ
- `appendChild` ใช้สำหรับแทรก element ใดๆ ลงใน element ที่กำหนด โดย element ที่แทรกจะเป็น โหนดลูก (child node) ของ element ที่แทรก
- `contains()` เป็นการตรวจสอบว่าภายใน Hashtable ในมี key, value นั้นอยู่่หรือเปล่า
- `forEach` ใช้เพื่อการ วนลูป รอบอาร์เรย์ โดยหลักการแล้วเราใช้เพื่อเข้าถึงแต่ละ Element ภายใน Array
- != -1 ความหมายคือ ถ้าไม่เท่ากับ
- `splice()` คือการเปลี่ยนแปลงค่าภายใน Array เช่น ลบ(shift) เพิ่ม(push) โดยที่ไม่ได้สร้าง Array ตัวใหม่
- `document.querySelector()` เป็นการเรียก id หรือว่า class ที่เราต้งองการให้สิ่งนั้นทำงานอะไร
- `querySelectorAll` เป็นการเรียก id หรือว่า class ทั้งหมด และจะ return node list ออกมา
- `callback function` คือฟังก์ชันที่ถูกส่งเป็นพารามิเตอร์ของฟังก์ชันอื่นเพื่อเรียกใช้งานในภายหลัง
- `localStorage.setItem(key, value)` คือ การเก็บข้อมูลลงใน Local Storage
- `localStorage.getItem(key)` คือ การเรียกใช้ข้อมูล key ของ Local Storage
- `localStorage.removeItem(key)` คือ การลบข้อมูลที่ key เก็บไว้
- `localStorage.clear()` คือ การลบข้อมูลทั้งหมดในโดเมน
- `innerHTML` เป็นการ add สิ่งที่เราต้องการเข้าไปที่ html

## e.preventDefault

ป้องกัน event ที่เราไม่ต้องการให้เกิดอัตโนมัติ

```js
// e.preventDefault
function handleOnSubmit(event) {
   event.preventDefault()
}

<form onSubmit={handleOnSubmit} >
 <button type"submit"> submit form </button>
</form>

```

```js
// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  // สร้างตัวแปร tasks ขึ้นมาเพื่อทำการเช็คค่าว่า ค่าที่ส่งเข้ามาเป็นค่าว่างหรือว่ามีค่าหรือไม่
  // สร้าง if else statment ขึ้นมาเพื่อตรวจเช็คค่าว่า เป็นค่าว่างหรือไม่
  // ถ้าเป็นค่าว่าง ให้ส่งค่าเป็น Array เปล่าออกไป
  // ถ้าไม่เป็นค่าว่าง ให้เรียกใช้ method push ส่งค่าเข้าไปใน array ของ local storage
  // Local storage สามารถเก็บค่าได้เฉพาะ string เท่านั้น ดังนั้นเราจะต้องใช้ JSON.parse เพื่อแปลงเป็น String เพื่อส่งค่าไปที่ Local DB
  // จากนั้นเราจะต้องส่งค่าไปที่ Local DB ด้วย JSON.stringify() เพื่อใหสามารถอ่านค่าได้
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

## ขั้นตอนการลงมือทำโปรเจค

สำหรับขั้นตอนการลงมือเขียนโปรแกรม จะลงมือเขียนทั้งหมด 3 ขั้นตอนหลักๆ คือ

1. html, css เป็นสร้างโครงสร้างของหน้าเว็บ
2. javaScript function เพื่อให้โปรแกรมสามารถทำงานได้

## javaScript Function

1. เราจะต้องสร้างตัวแปร เพื่อที่ เรียก class, id จาก html

```js
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
```

### จากนั้นเราก็เขียน function เพื่อเรียกใช้งาน แบบ callback function

```js
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM laod event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear task
  clearBtn.addEventListener("click", clearTasks);

  // Fileter task event
  filter.addEventListener("keypress", filterTasks);
}
```

### หลังจากที่เราเขียน function ด้านบนแล้ว เราจะต้องมาเขียน function ที่เราเรียกใช้ก่อนหน้านี้

### Get Tasks form Local storage

```js
// Get Tasks form Local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create element
    const li = document.createElement("li");

    // Add class to const li
    li.className = "collection-item";

    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create new link element
    const link = document.createElement("a");

    // Add class to const like
    link.className = "delete-item secondary-content";

    // Add icon to html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    // เรียก ตัวแปรที่เราสร้างไว้มาใช้งาน โดยการแทรก(appendChild) li ที่เราสร้างไว้ลงไป
    taskList.appendChild(li);
  });
}
```

### Add Task

```js
// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create element
  const li = document.createElement("li");

  // Add class to const li
  li.className = "collection-item";

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement("a");

  // Add class to const like
  link.className = "delete-item secondary-content";

  // Add icon to html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";

  // เป็นการป้องกันไม่ให้ โปรแกรม reflesh หน้าจอ หลังจากที่กด submit
  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  // สร้างตัวแปร tasks ขึ้นมาเพื่อทำการเช็คค่าว่า ค่าที่ส่งเข้ามาเป็นค่าว่างหรือว่ามีค่าหรือไม่
  // สร้าง if else statment ขึ้นมาเพื่อตรวจเช็คค่าว่า เป็นค่าว่างหรือไม่
  // ถ้าเป็นค่าว่าง ให้ส่งค่าเป็น Array เปล่าออกไป
  // ถ้าไม่เป็นค่าว่าง ให้เรียกใช้ method push ส่งค่าเข้าไปใน array ของ local storage
  // จากนั้นเราจะต้องส่งค่าไปที่ Local DB ด้วย JSON.stringify() เพื่อใหสามารถอ่านค่าได้
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // ส่งค่าไป parameter เพื่อเก็บค่าที่ได้เข้า Local DB
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
```

### Remove task

```js
// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
}
```

### Clear tasks

```js
// Clear tasks
function clearTasks(e) {
  // First way
  // taskList.innerHTML = '';

  // Second way is faster than first way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // clear task from local storage
  cleaerTaskFromLocalSorage();
}

// Clear Task form local storage
function cleaerTaskFromLocalSorage() {
  localStorage.clear();
}
```

### Filter tasks

```js
// Filter tasks
function filterTasks(e) {
  // สร้างตัวแปร text ขึ้นมาเพื่อแปลงค่าให้เป็นตัวเล็กก่อน
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  // เรียก list ทั้งหมดด้วยคำสั่ง document.querySelectorAll('.collection-item')
  // จากนั้น ใช้ method forEach เพื่อ loop array ออกมา
  // จากนั้นเขียน function เพื่อให้ return ค่าที่มาจากการ filter
  // ถ้าค่า Match ให้แสดงค่าออกมา
  // แต่ค่าไม่ Match ไม่ต้องแสดงอะไร ออกมา
}
```
