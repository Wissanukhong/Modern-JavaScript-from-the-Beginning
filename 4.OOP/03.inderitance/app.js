// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Person Prototyoe
Person.prototype.greeting = function () {
  return `Hello my name is ${this.firstName} ${this.lastName}`;
};

// Aggisng new person to Person prototype
const person1 = new Person('Wissanu', 'Khongjandee');

// Output
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// เราต้องการเรียกใช้งาน Person.prototype.greeting
// 1.เราจะต้องให้ Customer.prototype = Object.create(Person.prototype); ก่อน ไม่อย่างนั้นจะเกิด Error
// Inheritance the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer
Customer.prototype.constructor = Customer;

// 2.เราจะต้อง Assign ค่าด้วยการสร้างตัวแปรใหม่ถึงจะมีการเรียกใช้งานที่ถูกสืบทอดมา
// Create customer
const customer1 = new Customer('John', 'Doe', '555-555-555', 'Standard');

// Output customer1 ที่เราสร้างใหม่
console.log(customer1);

// Overwrite greering for Customer
Customer.prototype.greeting = function () {
  return `Hello there my name is ${this.firstName} ${this.constructorlastName} Wellcome to our company`;
};

// 3.ทดสอบการเรียกใช้งาน
console.log(customer1.greeting());
