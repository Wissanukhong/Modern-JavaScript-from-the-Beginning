// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Person Prototyoe
Person.prototype.greeting = function () {
  return `Hello my name is ${this.firstName} ${this.lastName}`;
};

// Aggisg new person to Person prototype
const person1 = new Person('Wissanu', 'Khongjandee');

// Output
// console.log(person1.greeting());

// Customer constructor
function Customer(fistName, lastName, phone, membership) {
  Person.call(this, fistName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inheritance the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Create customer
const customer1 = new Customer('John', 'Doe', '555-555-555', 'Standard');

// Output customer1
// console.log(customer1);
console.log(customer1.greeting());
