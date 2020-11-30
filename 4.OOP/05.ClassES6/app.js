// class Person
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there my name is ${this.firstName} ${this.lastName}`;
  }

  calculate() {
    const diff = Date.now() - this.birthday.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
}

const Wissanu = new Person('Wissanu', 'khongjandee', '10-05-1993');
const John = new Person('John', 'Doe', '1-10-1990');

console.log(`${Wissanu.greeting()} I am ${Wissanu.calculate()} years old`);
console.log(`${John.greeting()} I am ${John.calculate()} years old`);

// class Cars
class Cars {
  conststuctor(brand, type, owner) {
    this.brand = brand;
    this.type = type;
    this.owner = owner;
  }
}

const Toyota = new Cars('Toyota', 'Revo', 'Wissanu');

console.log(Toyota);
