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
    console.log(people[i].name + ' ' + people[i].age);
}

const films = {
    films1: 'Titanic',
    films2: 'Jack',
    films3: 'Boat',
    films4: 'Pradang',
    films5: 'Tennet'
}

console.log(films);

// สร้าง Object มา 1 object ที่จะต้องเก็บค่า 
// ชื่อ นามสกุล
// อายุ
// จากนั้นเขียน function เพื่อคำนวณปีเกิดของแต่ละคน ว่าเกิดปีอะไร 
const family = [
    { name: 'Wissanu', lastName: 'Khongjandee', age: 27 },
    { name: 'Nippaprn', lastName: 'Khongjandee', age: 28 },
    { name: 'Warinthon', lastName: 'Khongjandee', age: 7 }
]

function birthYear() {
    for (let i = 0; i < family.length; i++) {
        const result = 2020 - family[i].age
        console.log(`In the family my name is ${family[i].name} I was born in ${result} `);
    }
}

birthYear();
