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
- [Template literals](#template-literals)
- [Array](#array)

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
let myAddress = ['599/5', 'Chongonothi', 'Yannawa', 'Bangkok', '10120'];
let output = myAddress.splice(1, 2)
console.log(output)
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
