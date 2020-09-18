// object
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'wissanu.kong@SpeechGrammarList.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Chongnonthi',
        state: 'Yannawa'
    },
    getBirthYear: function () {
        return 2020 - this.age;
    }

}
console.log(person);

let val;
val = person;

// get specific value
val = person.firstName;
console.log(val);

val = person['lastName'];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.address['city'];
console.log(val);

val = person.getBirthYear();
console.log(val);

// new object
const people = [
    { name: 'John', age: 30 },
    { name: 'Smith', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Brown', age: 39 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + ' '+ people[i].age);
}