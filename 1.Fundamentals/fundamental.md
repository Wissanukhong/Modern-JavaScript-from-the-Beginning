tabale of contents

- [การตั้งชื่อตัวแปร](#การตั้งชื่อตัวแปร)
- [Variable](#variable)
- [Data types](#data-types)
  - [Primitive types](#primitive-types)
  - [Reference types - object](#reference-types---object)
- [Type conversion](#type-conversion)
  - [number to string](#number-to-string)
  - [Boolean to string](#boolean-to-string)
  - [Date to string](#date-to-string)
  - [Array to String](#array-to-string)
  - [toString เราสามารถใช้ method นี้ในการแปลงค่าให้เป็น string](#tostring-เราสามารถใช้-method-นี้ในการแปลงค่าให้เป็น-string)
  - [String to number](#string-to-number)
- [Math (Number)](#math-number)
- [String](#string)
  - [concat](#concat)
  - [concantination](#concantination)
  - [Append (เพิ่มค่าเข้าไป)](#append-เพิ่มค่าเข้าไป)
  - [Length](#length)
  - [function concat](#function-concat)
  - [Change case](#change-case)
  - [indexOf()](#indexof)
  - [charArt()](#charart)
  - [get last char](#get-last-char)
  - [substring](#substring)
  - [splite](#splite)
  - [each char](#each-char)
  - [each comma](#each-comma)
  - [includes()](#includes)
- [Template literals](#template-literals)
- [Array](#array)
  - [create new Array](#create-new-array)
  - [Change case with loop array](#change-case-with-loop-array)
  - [Array length](#array-length)
  - [check something in Array it will return 'ture' and 'False'](#check-something-in-array-it-will-return-ture-and-false)
  - [Get single value](#get-single-value)
  - [Insert value into array (It is replace on the old value)](#insert-value-into-array-it-is-replace-on-the-old-value)
  - [Find index](#find-index)
  - [Add on to front](#add-on-to-front)
  - [Add on to end](#add-on-to-end)
  - [Take off from the end](#take-off-from-the-end)
  - [Take off from the front](#take-off-from-the-front)
  - [Splice การเลือกค่าจาก array มาแสดง](#splice-การเลือกค่าจาก-array-มาแสดง)
  - [Revers](#revers)
  - [Revers workshop](#revers-workshop)
  - [sorting string](#sorting-string)
  - [sorting number](#sorting-number)
  - [Revers sorting number](#revers-sorting-number)
- [Object literals](#object-literals)
  - [object](#object)
  - [get specific value](#get-specific-value)
  - [new object](#new-object)
- [Date and Times](#date-and-times)
- [Interation](#interation)
  - [If else statement](#if-else-statement)
  - [Equal to](#equal-to)
  - [Not Equal to](#not-equal-to)
  - [Equal to value & Type](#equal-to-value--type)
  - [Not equal to value & Type](#not-equal-to-value--type)
  - [Test if undefined](#test-if-undefined)
  - [Greater or less than](#greater-or-less-than)
  - [if else workshop](#if-else-workshop)
  - [Logical operator](#logical-operator)
  - [Ternary Operator](#ternary-operator)
  - [Switches case](#switches-case)
- [Function](#function)
- [General loop](#general-loop)
- [Window Object](#window-object)
- [Global and Block scope variables](#global-and-block-scope-variables)

# การตั้งชื่อตัวแปร

- `var firstName = 'John';` // Camel case (คำแรกขึ้นต้นด้วยตัวเล็กคำต่อไปอักษรตัวแลกขึ้นต้นด้วยตัวใหญ่)

- `var first_name = 'Sara';` // Underscore case (เชื่อมคำด้วย \_ )

- `var FirstName = 'Tom';` // Pascal case (ตัวแรก เป็นตัวใหญ่)

# Variable

1. var (global variable) คือสามารถเข้าถึงตัวแปรได้ทั้งโปรแกรม
2. let (Block variable) คือตัวแปรที่เข้าถึงตัวแปรได้เฉพาะใน {Bllock scope} เท่านั้น
3. const (constant variable) คือตัวแปรที่จะต้องกำหนดค่าเริ่มต้นให้ และไม่สามารถเปลี่ยนแปลงค่าได้

# Data types

Data types คือ ชนิดของข้อมูลที่เรากำหนดให้โปรแกรมทำงาน เช่น ตัวเลข(Number), ตัวอักษร(String) เป็นต้น

## Primitive types

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)

## Reference types - object

1. Object
2. Array
3. Function
4. Date
5. ETC

```js
const person = {
  name: "Wissanu",
  age: 28,
};

// return object
console.log(typeof person);
```

# Type conversion

Type conversion คือการเปลี่ยนแปลงค่าเริ่มต้นที่เรากำหนด ให้เป็นค่าที่เราต้องการ เช่น เรารับค่ามาเป็นตัวเลข แต่เราต้องการเปลี่ยนเแปลงเป็นตัวอักษร เพื่อนำไปใช้งานต่อไป

## number to string

```js
val = String(555);
console.log(val);
console.log(typeof val); 
console.log(val.length); 
```

## Boolean to string

```js
val = String(true);
console.log(val);
console.log(typeof val);
```

## Date to string

```js
val = String(new Date()); 
console.log(val);
console.log(typeof val);
```

## Array to String

```js
val = String([1, 2, 3, 4]);
console.log(val); 
console.log(typeof val); 
```

## toString เราสามารถใช้ method นี้ในการแปลงค่าให้เป็น string

```js
val = (5).toString();
console.log(val);
console.log(typeof val);

val = true.toString();
console.log(val);
console.log(typeof val);
```

## String to number

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
> > `.toFixed()` เป็นการกำหนดว่าเราต้องทศนิยมจำนวนกี่ตัว
> > `.length()` ใช้สำหรับเช็คว่าความยาวของตัวตัวแปรว่ามีอยู่ทังหมดกี่ตัว

# Math (Number)

| Syntax   | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| random() | ใช้สำหรับ random number ระหว่าง 0.1-0.9                                                 |
| round()  | ใช้สำหรับปัดเศษทศนิยมให้เป็นจำนวนเต็ม ถ้าหากค่าไม่เกิน 0.5 จะปัดเศษลง แต่ถ้าค่าเกิน 0.5 ขึ้นไปจะปัดเศษขึ้น |
| ceil()   | ใช้สำหรับปัดเศษทศนิยมให้เป็นจำนวนเต็ม(ปัดขึ้น)                                                  |
| floor()  | ใช้สำหรับปัดเศษทศนิยมให้เป็นจำนวนเต็ม(ปัดลง)                                                  |
| max()    | ใช้ในการหาค่าของกลุ่มตัวเลขที่สูงที่สุด                                                        |
| min()    | ใช้ในการหาค่าของกลุ่มตัวเลขที่ต่ำที่สุด                                                         |

you can read this for method
[📌 JavaScript :: Math Class](http://code.function.in.th/javascript/math)\*\*\*\*

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

# String

| Syntax              | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| :---                | :---                                                                             |
| .length             | ใช้สำหรับเช็คว่าความยาวของตัวตัวแปรว่ามีอยู่ทังหมดกี่ตัว                                        |
| .toUpperCase()      | เปลี่ยนตัวอักษรให้เป็นตัวใหญ่                                                            |
| .toLowerCase()      | เปลี่ยนตัวอักษรให้เป็นตัวเล็ก                                                            |
| .indexOf('l')       | Return Index ค่าแรกของ Array ออกมา                                                |
| .charAt('0')        | return index ค่าแรกออกมา                                                          |
| .charAt(.length - 1 | return ค่าสุดท้ายออกมา                                                              |
| .substring(0, 4)    | เป็นการตัดค่าออกมาแสดงเฉพาะค่าที่ต้องการ (ตัวเริ่มต้นที่ต้องการ, ตัวสุดท้ายที่ต้องการ)               |
| .slice(0, 4)        | ใช้สำหรับแยกค่าภายใน Array ออกมาทีละค่า                                                |
| .replace('Brad')    | ใช้สำหรับวางค่าเข้าไปแทน                                                              |
| .includes()         | ใช้สำหรับตรวจเช็คค่าว่าภายใน Array มีค่าที่เราต้องการหาหรือไม่ จะ Return ออกมาเป็น True, False |


```js
let firstName = "Wissanu";
let lastname = "Khongjandee";

let output;
```

## concat

```js
output = `This my firstname is ${firstName} andm my lastname is ${lastname}`;
console.log(output);
```

## concantination

```js
output = firstName + " " + lastname;
console.log(output);
```

## Append (เพิ่มค่าเข้าไป)

```js
output = "John ";
output += "Due";
console.log(output);
```

## Length

```js
output = firstName.length;
console.log(output);
```

## function concat

```js
output = firstName.concat(" ", lastname);
console.log(output);
```

## Change case

```js
output = firstName[3].toUpperCase();
console.log(output);

output = firstName[3].toLowerCase();
console.log(output);
```

## indexOf()

```js
output = firstName.indexOf("W");
console.log(output);

output = firstName.lastIndexOf("s");
console.log(output);
```

## charArt()

```js
output = firstName.charAt("2");
console.log(output);
```

## get last char

```js
output = firstName.charAt(firstName.length - 1);
console.log(output);
```

## substring

```js
output = firstName.substring(0, 4);
console.log(output);
```

## splite

```js
const myAddress = "599/5 Chongonothi Yannawa Bangkok 10120";
```

## each char

```js
output = myAddress.split("");
console.log(output);
```

## each comma

```js
output = myAddress.split(" ");
console.log(output);

output = myAddress.split(",");
console.log(output);
```

## includes()

```js
output = myAddress.includes("Chongonothi");
console.log(output);
```

# Template literals

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

# Array

## create new Array

```js
// way 1
const number = [43, 56, 33, 23, 44, 36];
console.log(number);

// way 2
const person = new Array("John due", "Brown smith");
console.log(person);

// way 3
const fruit = ["Banana", "Orange", "Pear", "apple"];
console.log(fruit);

// Output
let output;
```

## Change case with loop array

```js
const fruits = ["Banana", "Orange", "Pear", "apple"];

for (i = 0; i < fruit.length; i++) {
  const changeCase = fruit[i].toUpperCase();
  console.log(changeCase);
}
```

## Array length

```js
const allFruit = ["Banana", "Orange", "Pear", "apple"];
console.log(allFruit.length);
```

## check something in Array it will return 'ture' and 'False'

```js
const allFruit1 = ["Banana", "Orange", "Pear", "apple"];
const checkArray = Array.isArray("Banana");
console.log(checkArray);
```

## Get single value

```js
const allFruit2 = ["Banana", "Orange", "Pear", "apple"];
console.log(allFruit2[2]);
```

## Insert value into array (It is replace on the old value)

```js
const allFruit3 = ["Banana", "Orange", "Pear", "apple"];
allFruit3[2] = "Cake";
console.log(allFruit3);
```

## Find index

```js
const number2 = [43, 56, 33, 23, 44, 36];
output = number2.indexOf(56);
console.log(output);
```

## Add on to front

```js
number2.unshift(120);
console.log(number2);
```

## Add on to end

```js
number2.push(250);
console.log(number2);
```

## Take off from the end

```js
number2.pop();
console.log(number2);
```

## Take off from the front

```js
number2.shift();
console.log(number2);
```

## Splice การเลือกค่าจาก array มาแสดง

```js
let myAddress = ["599/5", "Chongonothi", "Yannawa", "Bangkok", "10120"];
let output = myAddress.splice(1, 2);
console.log(output); // 'Chongonothi', 'Yannawa'
```

## Revers

```js
number2.reverse();
console.log(number2);
```

## Revers workshop

```js
let myName = "Wissanu Khongjandee";
let sliceMyName = myName.split("");
console.log(sliceMyName);
let reversMyName = sliceMyName.reverse();
console.log(reversMyName);
```

## sorting string

```js
const allFruit4 = ["Banana", "Orange", "Pear", "Apple"];
output = allFruit4.sort();
console.log(output);
```

## sorting number

```js
const number4 = [43, 56, 33, 23, 44, 36];
output = number4.sort(function (x, y) {
  return x - y;
});
console.log(output);
```

## Revers sorting number

```js
const number5 = [43, 56, 33, 23, 44, 36];
output = number5.sort(function (x, y) {
  return y - x;
});
console.log(output);
```

# Object literals

## object

```js
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
```

## get specific value

```js
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
```

## new object

```js
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

# Date and Times

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

# Interation

## If else statement

`const id = 100;`

## Equal to

```js
if (id == 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
```

## Not Equal to

```js
if (id != 101) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
```

## Equal to value & Type

```js
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
```

## Not equal to value & Type

```js
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
```

## Test if undefined

```js
if (typeof id !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`NO ID`);
}
```

## Greater or less than

```js
if (id > 200) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}
```

## if else workshop

```js
const color = "red";
if (color === "red") {
  console.log("color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}
```

## Logical operator

```js
const name = "Steve";
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an aduit`);
}
```

## Ternary Operator

```js
console.log(id === 100 ? "CORRECT" : "INCORRECT");
```

## Switches case

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

# Function

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

# General loop

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

# Window Object

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

# Global and Block scope variables

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
