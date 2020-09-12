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

**instance**

```js
// defalt variable
let val;

// number to string
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length)


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
>>  `.toFixed()` is only work for number  
>> `.length()` is only work for string
