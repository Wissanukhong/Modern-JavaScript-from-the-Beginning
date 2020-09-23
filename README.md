<div align = "center" >
  <img src = "img/banner.png" alt = "javaScritp banner" >
  <h1 > Modern JavaScrip from the beginning </h1> 
</div >

- [introduction to javascript💡](#introduction-to-javascript)
- [How to name in variables💡](#how-to-name-in-variables)
- [Variable💡](#variable)
  - [var is global variable](#var-is-global-variable)
  - [let is Block variable](#let-is-block-variable)
  - [const is constant variable(We can chenge the value in const with object)](#const-is-constant-variablewe-can-chenge-the-value-in-const-with-object)
- [Data types 📄](#data-types-)
  - [Primitive types](#primitive-types)
  - [Reference types - object](#reference-types---object)
  - [Type conversion](#type-conversion)
    - [number to string](#number-to-string)
    - [Boolean to string](#boolean-to-string)
    - [Date to string](#date-to-string)
    - [Array to String](#array-to-string)
    - [toString](#tostring)
    - [String to number](#string-to-number)
  - [Math (Number)](#math-number)
    - [Example 🌱](#example-)
  - [String](#string)
    - [Example 🌱](#example--1)
  - [Template literals](#template-literals)
  - [Array](#array)
  - [Object literals](#object-literals)
  - [Date and Times](#date-and-times)
  - [IF Else Statement](#if-else-statement)
  - [Switches case](#switches-case)
  - [Function](#function)
  - [General loop](#general-loop)
  - [Window Object](#window-object)
  - [Global and Block scope variables](#global-and-block-scope-variables)
  - [DOM](#dom)
    - [Single Element](#single-element)

[This is my summary javaScript cheat sheet](https://docs.google.com/spreadsheets/d/15doGb6DQk_ULSSX6rGCPuz110nyPoUi35FM1fwBvT_s/edit?usp=sharing) 🎓

## introduction to javascript💡

1. Basics & Fundamentals: Data types, let & const variables, functions, conditionals, loops, object literals, arrays, etc
2. DOM Manipulation: Selectors, traversing the DOM, show / hide, creating & removing elements, event listeners
3. OOP: ES5 prototypes, inheritance, ES2015 classes & sub - classes, constructors
4. Async JS: Ajax & XHR, Fetch API, callbacks, promises, async /await ES2015 +: Arrow functions, template strings, generators, iterators, maps & sets, symbols & more
5. JavaScript Patterns: Module, Factory, State, Observer, Mediator, Singleton Other: Local & session storage, regular expressions, try catch error handling 7. 10 Projects of all kinds

## How to name in variables💡

- `var firstName = 'John';` // Camel case

- `var first_name = 'Sara';` // Underscore case

- `var FirstName = 'Tom';` // Pascal case

## Variable💡

### var is global variable
### let is Block variable
### const is constant variable(We can chenge the value in const with object)

## Data types 📄

Data types basically specify what kind of data can be stored and manipulated within a program. There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types. String, Number, and Boolean are primitive data types.

### Primitive types

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)

### Reference types - object

```js
const person = {
  name: "Wissanu",
  age: 28,
};

// return object
console.log(typeof person);
```

### Type conversion

Type conversion is change the defalt type of thier variable to something.

#### number to string

```js
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);
```

#### Boolean to string

```js
val = String(true);
console.log(val);
console.log(typeof val);
```

#### Date to string

```js
val = String(new Date());
console.log(val);
console.log(typeof val);
```

#### Array to String

```js
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
```

#### toString

```js
val = (5).toString();
console.log(val);
console.log(typeof val);

val = true.toString();
console.log(val);
console.log(typeof val);
```

#### String to number

```js
val = Number("5");
console.log(val);
console.log(typeof val);

val = Number(true);
console.log(val);
console.log(typeof val);

val = Number(false);
console.log(val);
console.log(typeof val);

val = Number(null);
console.log(val);
console.log(typeof val);

val = Number("hello");
console.log(val);
console.log(typeof val);

val = parseInt("100");
console.log(val);
console.log(typeof val);

val = parseFloat(10.5);
console.log(val);
console.log(typeof val);

val = Number.parseInt("12354");
console.log(val);
console.log(typeof val);

val = Number.parseFloat("12354.25");
console.log(val);
console.log(typeof val);
console.log(val.toFixed()); // Only work for number
```

> **Note 📑**
>
> > `.toFixed()` is only work for number
> > `.length()` is only work for string

### Math (Number)

| Syntax   | Description                                                |
| -------- | ---------------------------------------------------------- |
| Header   | Title                                                      |
| random() | random number between 0-9                                  |
| round()  | Used to round the decimal of a specified number            |
| ceil()   | Used to round decimals to integers. And to have more value |
| floor()  | Used to round decimals to integers. And to have less value |
| max()    | Used to find the greater value between the given numbers   |
| min()    | Used to find the smaller value between the given numbers   |

you can read this for method
[📌 JavaScript :: Math Class](http://code.function.in.th/javascript/math)

#### Example 🌱

```js
let val;

val = Math.E;
val = Math.random();
val = Math.floor();
val = Math.min();
val = Math.max();
val = Math.ceil(2.5);

// output
console.log(val);
```

### String

| Syntax              | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| Header              | Title                                                                                                          |
| length              | Check how many character that it contain                                                                       |
| .toUpperCase()      | Change text to upper case                                                                                      |
| .toLowerCase()      | Change text to Lower case                                                                                      |
| .indexOf('l')       | It will return the first index at which a given element can be found in the array, or -1 if it is not present. |
| .charAt('0')        | It will return the index of in the element                                                                     |
| .charAt(.length - 1 | It will return the last value                                                                                  |
| .substring(0, 4)    | Used to substring the string in array                                                                          |
| .slice(0, 4)        | Used to Slice the string in array                                                                              |
| .replace('Brad')    | Used to replace the value                                                                                      |
| .includes()         | Used to find the value in the array but it will return true and false                                          |

#### Example 🌱

```js
let firstName = "Wissanu";
let lastname = "Khongjandee";

let output;

// concat
output = `This my firstname is ${firstName} andm my lastname is ${lastname}`;
console.log(output);

// concantination
output = firstName + " " + lastname;
console.log(output);

// Append
output = "John ";
output += "Due";
console.log(output);

// Length
output = firstName.length;
console.log(output);

// function concat
output = firstName.concat(" ", lastname);
console.log(output);

// Change case
output = firstName[3].toUpperCase();
console.log(output);

output = firstName[3].toLowerCase();
console.log(output);

// indexOf()
output = firstName.indexOf("W");
console.log(output);

output = firstName.lastIndexOf("s");
console.log(output);

// charArt()
output = firstName.charAt("2");
console.log(output);

// get last char
output = firstName.charAt(firstName.length - 1);
console.log(output);

// substring
output = firstName.substring(0, 4);
console.log(output);

// splite
const myAddress = "599/5 Chongonothi Yannawa Bangkok 10120";

// each char
output = myAddress.split("");
console.log(output);

// each comma
output = myAddress.split(" ");
console.log(output);

output = myAddress.split(",");
console.log(output);

// includes()
output = myAddress.includes("Chongonothi");
console.log(output);
```

### Template literals

```js
const name = "John";
const age = 30;
const job = "Web developer";
const city = "Bangkok";

// with es5
let es5 =
  "<h1>ES5</h1>" +
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>age: " +
  age +
  "</li>" +
  "<li>job: " +
  job +
  "</li>" +
  "<li>city: " +
  city +
  "</li>" +
  "</ul>";

document.body.innerHTML = es5;

// with es6
let es6 = `
<h1>ES6</h1>
<ul>    
    <li>Name: ${name}</li>
    <li>age: ${age}</li>
    <li>job: ${job}</li>
    <li>city: ${city}</li>
</ul
`;
document.body.innerHTML = es6;
```

### Array

```js
// create new Array
const number = [43, 56, 33, 23, 44, 36];
console.log(number);

const person = new Array("John due", "Brown smith");
console.log(person);

const fruit = ["Banana", "Orange", "Pear", "apple"];
console.log(fruit);

// Output
let output;

// Change case with loop array
const fruits = ["Banana", "Orange", "Pear", "apple"];

for (i = 0; i < fruit.length; i++) {
  const changeCase = fruit[i].toUpperCase();
  console.log(changeCase);
}

// Array length
const allFruit = ["Banana", "Orange", "Pear", "apple"];
console.log(allFruit.length);

// check something in Array it will return 'ture' and 'False'
const allFruit1 = ["Banana", "Orange", "Pear", "apple"];
const checkArray = Array.isArray("Banana");
console.log(checkArray);

// Get single value
const allFruit2 = ["Banana", "Orange", "Pear", "apple"];
console.log(allFruit2[2]);

// Insert value into array (It is replace on the old value)
const allFruit3 = ["Banana", "Orange", "Pear", "apple"];
allFruit3[2] = "Cake";
console.log(allFruit3);

// Find index
const number2 = [43, 56, 33, 23, 44, 36];
output = number2.indexOf(56);
console.log(output);

// Add on to front
number2.unshift(120);
console.log(number2);

// Add on to end
number2.push(250);
console.log(number2);

// Take off from the end
number2.pop();
console.log(number2);

// Take off from the front
number2.shift();
console.log(number2);

// Splice การเลือกค่าจาก array มาแสดง
let myAddress = ["599/5", "Chongonothi", "Yannawa", "Bangkok", "10120"];
let output = myAddress.splice(1, 2);
console.log(output);
// 'Chongonothi', 'Yannawa'

// Revers
number2.reverse();
console.log(number2);

// Revers workshop
let myName = "Wissanu Khongjandee";
let sliceMyName = myName.split("");
console.log(sliceMyName);
let reversMyName = sliceMyName.reverse();
console.log(reversMyName);

// sorting string
const allFruit4 = ["Banana", "Orange", "Pear", "Apple"];
output = allFruit4.sort();
console.log(output);

// sorting number
const number4 = [43, 56, 33, 23, 44, 36];
output = number4.sort(function (x, y) {
  return x - y;
});
console.log(output);

// Revers sorting number
const number5 = [43, 56, 33, 23, 44, 36];
output = number5.sort(function (x, y) {
  return y - x;
});
console.log(output);
```

### Object literals

```js
// object
const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "wissanu.kong@SpeechGrammarList.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Chongnonthi",
    state: "Yannawa",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};
console.log(person);

let val;
val = person;

// get specific value
val = person.firstName;
console.log(val);

val = person["lastName"];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address["city"];
console.log(val);

val = person.getBirthYear();
console.log(val);

// new object
const people = [
  { name: "John", age: 30 },
  { name: "Smith", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Brown", age: 39 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name + " " + people[i].age);
}
```

### Date and Times

```js
let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
```

### IF Else Statement

```js
// if statement
const id = 100;

// Equal to
if (id == 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Not Equak to
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Equal to value & Type
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Not equal to value & Type
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Test if undefined
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`NO ID`);
}

// Greater or less than
if (id > 200) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// IF ELSE
const color = "red";
if (color === "red") {
  console.log("color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

// Logical operator
const name = "Steve";
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an aduit`);
}

// Ternary Operator
console.log(id === 100 ? "CORRECT" : "INCORRECT");
```

### Switches case

```js
// switch case
const color = "green";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tueday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(` Today is ${day}`);
```

### Function

Function is the block of code

1. Funciton declaration
2. Function Expression

```js
// Function declarations
function greet() {
  console.log("Hello");
}

greeting();

// Function Expressions
const square = function (x = 3) {
  return x * x;
};

console.log(square());

// Immidiatley Invokable Function Expression - IIFEs
(function () {
  console.log("Start here...");
})();

// Invokable Function Expression = arrow function
(() => {
  console.log("hello");
})();

// Property Method
const todo = {
  add: function () {
    console.log("Add todo....");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo");
};

todo.add();
todo.edit(22);
todo.delete();
```

### General loop

```js
// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// For loop continue
for (let i = 0; i < 10; i++) {
  // continue
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }
  console.log("Number " + i);
}

// For loop break
for (let i = 0; i < 10; i++) {
  // continue
  if (i === 2) {
    console.log("2 is my favorite number");
    continue;
  }
  if (i === 5) {
    console.log("5 is my favorite number");
    break;
  }
  console.log("Number " + i);
}

// While loop
let i = 0;
while (i < 10) {
  console.log("Number " + i);
  i++;
}

// Do while loop
let j = 0;

do {
  console.log("This is from do while loop " + i);
  j++;
  break;
} while (j < 10);

// Loop in array
const cars = ["Ford", "Checy", "Honda", "Toyota"];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//forEacch (use callBack function)
const cars = ["Ford", "Checy", "Honda", "Toyota"];

cars.forEach(function (car) {
  console.log(car);
});

// Map return deferent array
const users = [
  { id: 1, name: "Jouhn" },
  { id: 2, name: "Doe" },
  { id: 3, name: "Brown" },
  { id: 4, name: "Smith" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// for in loop
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
// Output
// firstName : John
// lastName : Doe
// age : 40
```

### Window Object

```js
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
alert("Hello World");

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm("Are you sure")) {
  console.log("YES");
} else {
  console.log("NO");
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = "http://google.com";
Reload;
window.location.reload();

// History Object
window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

// output
console.log(val);
```

### Global and Block scope variables

1. Global variable can used all the programs
2. The Block scope can used only there scope

```js
// Global scope
var a = 1;

// Block scope
let b = 2;
const c = 3;

// function scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function scope: ", a, b, c);
}
test();

console.log("Global Scope: ", a, b, c);
```

### DOM

#### Single Element

```js
// document.getElementById()
console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change styling
// first style
document.getElementById("task-title").style.background = "#333";
// Second style
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
taskTitle.style.display = "none";

// Change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// querySelector
document.querySelector("#task-title"); // query by id
document.querySelector(".task-title"); // query by className
document.querySelector("h5"); // query by tag element

// quierySelector with pseudo classes
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child").style.color = "green";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(3)").textContent = "Hello world";
document.querySelector("li:nth-child(3)").style.background = "#ccc";
```
