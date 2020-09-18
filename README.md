<div align = "center" >
  <img src = "img/banner.png" alt = "javaScritp banner" >
  <h1 > Modern JavaScrip from the beginning </h1> 
</div >

- [introduction to javascript💡](#introduction-to-javascript)
- [How to name in variables💡](#how-to-name-in-variables)
- [Variable💡](#variable)
- [Data types 📄](#data-types-)
  - [Primitive types](#primitive-types)
  - [Reference types - object](#reference-types---object)
  - [Type conversion](#type-conversion)
- [Math (Number)](#math-number)
  - [Example 🌱](#example-)
- [String](#string)
  - [Example 🌱](#example--1)
- [In the classroom](#in-the-classroom)
  - [Example code](#example-code)
  - [practice problem](#practice-problem)
  - [Login](#login)

[This is my summary javaScript cheat sheet](https://docs.google.com/spreadsheets/d/15doGb6DQk_ULSSX6rGCPuz110nyPoUi35FM1fwBvT_s/edit?usp=sharing) 🎓

### introduction to javascript💡

1. Basics & Fundamentals: Data types, let & const variables, functions, conditionals, loops, object literals, arrays, etc
2. DOM Manipulation: Selectors, traversing the DOM, show / hide, creating & removing elements, event listeners
3. OOP: ES5 prototypes, inheritance, ES2015 classes & sub - classes, constructors
4. Async JS: Ajax & XHR, Fetch API, callbacks, promises, async /await ES2015 +: Arrow functions, template strings, generators, iterators, maps & sets, symbols & more
5. JavaScript Patterns: Module, Factory, State, Observer, Mediator, Singleton Other: Local & session storage, regular expressions, try catch error handling 7. 10 Projects of all kinds

### How to name in variables💡

- `var firstName = 'John';` // Camel case

- `var first_name = 'Sara';` // Underscore case

- `var FirstName = 'Tom';` // Pascal case

### Variable💡

1. var is global variable
2. let is Block variable
3. const is constant variable(We can chenge the value in const with object)

### Data types 📄

Data types basically specify what kind of data can be stored and manipulated within a program. There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types. String, Number, and Boolean are primitive data types.

#### Primitive types

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)

#### Reference types - object

```js
const person = {
  name: "Wissanu",
  age: 28,
};

// return is object
console.log(typeof person);
```

#### Type conversion

Type conversion is change the defalt type of thier variable to something.

**Example 🌱**

```js
// defalt variable
let val;

// number to string
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);

// Boolean to string
val = String(true);
console.log(val);
console.log(typeof val);

// Date to string
val = String(new Date());
console.log(val);
console.log(typeof val);

// Array to String
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);

// toString
val = (5).toString();
console.log(val);
console.log(typeof val);

val = true.toString();
console.log(val);
console.log(typeof val);

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");

val = parseInt("100");
val = parseFloat(10.5);

val = Number.parseInt("12354");
val = Number.parseFloat("12354.25");

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
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
const firstName = "Wissanu";
const lastName = "Khongjandee";
const age = 27;

let fullName;

// concatenation
fullName = firstName + lastName + age;

// append
fullName = "John";
fullName += "Traversy";

fullName = "Hello my name is " + firstName + " I am " + age;

// Escaping
fullName = "That's awesome";

// Length
fullName = firstName.length;
console.log(fullName);

// concat()
fullName = firstName.concat(" ", lastName);

// Change case
fullName = firstName.toUpperCase();
fullName = firstName.toLowerCase();

// index of array (start at 0)
fullName = firstName[5];

// indexOf()
fullName = firstName.indexOf("l");
fullName = firstName.lastIndexOf("l");

// charAt()
fullName = firstName.charAt("0");

// Get last char
fullName = firstName.charAt(firstName.length - 1);

// substring()
fullName = firstName.substring(0, 4);

// slice()
fullName = firstName.slice(0, 4);
fullName = firstName.slice(-3);

// split()
fullName = str.split(" ");
fullName = tags.split(",");

// replace()
fullName = str.replace("Brad", "Jack");

// includes()
fullName = str.includes("foo");

// output
console.log(fullName);
```

### In the classroom

#### Example code

```js
// บวกก่อนค่อยนำค่าไปใช้(++i)
let a = 5;
let c = ++a;
console.log(c); // 6

// จะนำค่าไปใช้ก่อนค่อยบวก(i++)
let b = 10;
let d = b++;
console.log(d); // 10

// for loop show the value
let cars = ["Suzuki", "Hobda", "Toyota"];

let i = 0;
let nameCars = "";
for (i = 0; i < cars.length; i++) {
  nameCars += cars[i] + "<br>";
}

document.getElementById("car").innerHTML = nameCars;

// codition if else statement
let x = 10;
if (x < 10) {
  console.log(`x มีค่ามากกว่า 10`);
} else {
  console.log(`x มีค่าเท่ากับ 10`);
}
```

#### practice problem

```js
let myStatement = prompt();
let inputNumber = +myStatement; // Solution 1
let inputNumber = number(myStatement); // Solution 2

if (typeof inputNumber == "number" && !isNaN(inputNumber)) {
  if (inputNumber >= 5) {
    let textMore = `ค่าของ myStatement คือ ${inputNumber} มีค่ามากกว่า 5`;
    document.getElementById("statement").innerHTML = textMore;
  } else {
    let textless = `ค่าของ myStatement คือ ${inputNumber} มีค่าน้อยกว่า 5 `;
    document.getElementById("statement").innerHTML = textless;
  }
} else {
  let textError = `Is not a number`;
  document.getElementById("statement").innerHTML = textError;
}
```

**Explain this code**

1. statement
2. สร้างตัวแปร มาไว้รับค่า myStatement มารับค่าด้วย function 3. prompt()
3. สร้างตัวแปร inputNumber มาไว้สำหรับแปลงค่าให้เป็นตัวเลข
4. (number)
5. สร้าง function if ( ตรวจสอบค่าว่าเป็นตัวเลขไหม && ถ้าเป็น !isNaN ){
6. ถ้าค่าของ myStatement มีค่ามากกว่า 5 ให้แสดงค่านี้ออกมาก
7. } else {
8. ถ้าไม่ใช้ให้แสดงค่านี้ออกมา
9. }
10. else
11. ถ้าหากเป็น String ให้แสดงออกมาว่า ไม่ใช้ Number

#### Login

```js
let name = prompt("what is your name?");

if (name === "admin") {
    let password = prompt("what is your password?");

    if (password === "codecamp#5") {
      alert("Welcome");
    } else if (password === "" || password === null) {
      alert("cancel");
    } else {
      alert("Wrong password");
    }
} else if (name === "" || name === null) {
  alert("cancel");
} else {
  alert("I don't know you");
}
```

1. Create variable name to get the value with function promt()
2. Used if condition for variable name === "admin"
3. Create let password to get the value with function promt()
4. Used if condition to check password === "codecamp"
5. Used else if condition to check password === "" || password === null
