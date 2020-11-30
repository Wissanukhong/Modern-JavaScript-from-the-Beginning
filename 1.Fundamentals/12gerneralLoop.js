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
  console.log('Number ' + i);
  i++
}

// Do while loop 
let j = 0;

do {
  console.log('This is from do while loop ' + i);
  j++
  break;
}

while (j < 10);

// Loop in array
const cars = ['Ford', 'Checy', 'Honda', 'Toyota'];

for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//forEacch (use callBack function)
const cars = ['Ford', 'Checy', 'Honda', 'Toyota'];

cars.forEach(function (car) {
  console.log(car);
});

// Map return deferent array
const users = [
  { id: 1, name: 'Jouhn' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Brown' },
  { id: 4, name: 'Smith' },
]

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// for in loop
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
// Output
// firstName : John
// lastName : Doe
// age : 40

// days of the week
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < week.length; i++) {
  console.log(week[i]);
}