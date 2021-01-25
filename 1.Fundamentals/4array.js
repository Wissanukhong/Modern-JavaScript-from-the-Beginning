// create new Array
const number = [43, 56, 33, 23, 44, 36];
console.log(number);

const person = new Array('John due', 'Brown smith');
console.log(person);

const fruit = ['Banana', 'Orange', 'Pear', 'apple'];
console.log(fruit);

// Output
let output;

// Mixed
const mixed = [
  'Banana',
  'Orange',
  'Pear',
  'apple',
  43,
  56,
  33,
  23,
  44,
  36,
  'John due',
  'Brown smith',
  null,
  undefined,
  new Date(),
];
console.log(mixed);

// Change case with loop array
const fruits = ['Banana', 'Orange', 'Pear', 'apple'];

for (i = 0; i < fruit.length; i++) {
  const changeCase = fruit[i].toUpperCase();
  console.log(changeCase);
}

// Array length
const allFruit = ['Banana', 'Orange', 'Pear', 'apple'];
console.log(allFruit.length);

// check something in Array it will return 'ture' and 'False'
const allFruit1 = ['Banana', 'Orange', 'Pear', 'apple'];
const checkArray = Array.isArray('Banana');
console.log(checkArray);

// Get single value
const allFruit2 = ['Banana', 'Orange', 'Pear', 'apple'];
console.log(allFruit2[2]);

// Insert value into array (It is replace on the old value)
const allFruit3 = ['Banana', 'Orange', 'Pear', 'apple'];
allFruit3[2] = 'Cake';
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

// Splice value (start, end)
number2.splice();
console.log(number2);

// Revers
number2.reverse();
console.log(number2);

// Revers workshop
let myName = 'Wissanu Khongjandee';
let sliceMyName = myName.split('');
console.log(sliceMyName);
let reversMyName = sliceMyName.reverse();
console.log(reversMyName);

// sorting string
const allFruit4 = ['Banana', 'Orange', 'Pear', 'Apple'];
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

// sort arrow function
const myNumber = [45, 44, 78, 89, 413];
myNumber.sort((x, y) => x - y);
console.log(myNumber);

// sort by function
myNumber.sort(function (x, y) {
  return y - x;
});
console.log(myNumber);
