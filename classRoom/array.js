// Array
const person0 = ['a', 'b', 'c'];

console.log(typeof person);

// forEach
person.forEach(function (person) {
    console.log(person)
});

// for in retrun index used for object
const person1 = ['a', 'b', 'c'];

for (let x in person) {
    console.log(person[x]);
}

// new array
const cars = ['Toyota', 'Honda', 'Nissan'];

// .map
const newCars = cars.map(car => `${car} has 4 wheels`);

console.log(cars)
console.log(newCars)

// for each
let carsNew = [];
cars.forEach((car, index) => {
    carsNew[index] = `${car} has 4 wheels`
})

console.log(carsNew)

// filter 
// Need some value from array or object 
const people = [
    {name: 'wissanu', age: 15},
    {name: 'Gab', age: 30},
    {name: 'Son', age: 45},
    {name: 'Tare', age: 33}
]

const result = people.filter(function (people) {
    return people.age > 30 ;
});

console.log(result);