// new array
const cars = ['Toyota', 'Honda', 'Nissan'];

// .map
const newCars = cars.map(car => `${car} has 4 wheels`);

console.log(cars); // output [ 'Toyota', 'Honda', 'Nissan' ]
console.log(newCars); // output [ 'Toyota has 4 wheels', 'Honda has 4 wheels', 'Nissan has 4 wheels' ]

// .map The number and each number are multiplied by 2.
const array1 = [1, 2, 30, 400];
const array2 = array1.map(myIndex => myIndex * 2);
console.log(array2); // output [ 2, 4, 60, 800 ]

// .map number to string
const array3 = [1, 2, 3, 4];
const array4 = array3.map(myNumber => myNumber.toString());
console.log(array3); // output [ 1, 2, 3, 4 ]
console.log(array4); // output [ '1', '2', '3', '4' ]

// .map with typeof
const array5 = [1, "1", 2, {}];
const array6 = array5.map(check => typeof (check));
console.log(array6); // output [ 'number', 'string', 'number', 'object' ]

// .map with change the value to uppercase
const array7 = ['apple', 'banana', 'orange'];
const array8 = array7.map(changeCase => changeCase.toUpperCase());
console.log(array8); // output [ 'APPLE', 'BANANA', 'ORANGE' ]

// .map with object
const array9 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]

const array10 = array9.map(showName => showName.name);
console.log(array10); // output [ 'apple', 'banana', 'watermelon' ]

