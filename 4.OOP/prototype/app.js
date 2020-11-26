// Object.prototype
// Person.prototype

// Person constructor
// dob = date of birthday
// 1970 เพราะว่า เป็นการคำนวณ Unix Timestamp ของภาษา javaScript
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// calculatator age
Person.prototype.calculator = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// calculate age
console.log(Wissanu.calculator());

const Wissanu = new Person('Wissau', 'Khongjandee', '1993');

// get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// result get full name
console.log(Wissanu.getFullName());
