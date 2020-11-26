// Object.create
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
// เราสามารถใช้ชื่อของ object โดยตรงเลยก็ได้ หรือว่า เราจะใช้ this ก็ได้เหมือนกัน
mary.firstName = 'Mary';
mary.lastName = 'Williams';

// get married
// mary.getsMarried('Thompson');

// // Output
// console.log(mary.greeting());

const Wissanu = Object.create(personPrototypes);
Wissanu.firstName = 'Wissanu';
Wissanu.lastName = 'Khongjandee';

console.log(Wissanu.greeting());
