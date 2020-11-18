// console
console.clear();
console.log(123);


console.log("text");
console.log([1, 2, 3, 4]);
console.log({
    a: 1,
    b: 2
});
console.error('this is some error');
console.warn('This is warning');
console.time('hello');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.time('Hello word');
console.timeEnd('Hello')

// global variables
var name = 'John doe';
console.log(name);

// new assignment into variable name
name = 'Steve smith';
console.log(name);

// new assignment into variable name
name = 'Joe learn';
console.log(name);

// Init var
var greeting;
console.log(greeting);

greeting = 'hello';
console.log(greeting);

// letter, number, _, $
// Can not start with number
var $name = 'John';
console.log($name);

// How to name
var firstName = 'John'; // Camel case 
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case

// Local Variable 
let myName = 'Wissanu';
console.log(myName);
myName = 'Steve Smith';
console.log(myName);

// CONST can not reassign the new value
// But you can change the value in const with object 
const yourName = 'John';
console.log(yourName);

// const
const person = {
    name: 'Wissanu',
    age: 30
}

// Reassign const
person.name = 'John Smith';
person.age = 45;
console.log(person);
console.log(typeof person);

