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
