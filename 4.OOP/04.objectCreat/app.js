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

// แบบฝึกหัด
function Carbrands(Toyota, Honda) {
  this.Toyota = Toyota;
  this.Honda = Honda;
}

const eachCar = new Carbrands('Revo', 'Civic');

console.log(eachCar);

// แบบฝึกหัดการสร้าง Prototype
const carsPrototype = {
  brand: function () {
    return `This brand of car is ${this.typeOfBrand}`;
  },
};

const Toyota = Object.create(carsPrototype);
Toyota.typeOfBrand = 'Toyota';

console.log(Toyota.brand());
