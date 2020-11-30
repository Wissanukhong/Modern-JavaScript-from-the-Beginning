// OOP
function People(name, age, tel) {
  this.name = name;
  this.age = age;
  this.telephone = tel;
  console.log(this);
}

const Wissanu = new People('Wissanu', 27, `080-742-1388`);
const Nipaporn = new People('Nipaporn', 28, `098-448-216`);

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const Nov = new Person('Wissanu', '10-05-1992');

console.log(Nov.calculateAge());

// String
const name1 = 'Wissanu';
const name2 = new String('Wissanu');
console.log(typeof name2);

// Number
const number1 = 5;
const number2 = new Number(5);
console.log(typeof number2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(`ค่านี้คือ` + ' ' + typeof bool2);
