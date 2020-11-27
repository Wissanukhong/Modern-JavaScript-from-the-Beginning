// javaScript class
class Person {
  constructor(firstname, lastName, dob) {
    this.firstName = firstname;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  hello() {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const Wissanu = new Person('Wissanu', 'Khongjandee', '1993');

console.log(`${Wissanu.hello()} I am  ${Wissanu.calculateAge()} years old`);
