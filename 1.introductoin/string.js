const firstName = 'Wissanu';
const lastName = 'Khongjandee';
const age = 27;

let fullName;

// concatenation
fullName = firstName + lastName + age;

// append
fullName = 'John';
fullName += 'Traversy';

fullName = 'Hello my name is ' + firstName + ' I am ' + age;

// Escaping
fullName = 'That\'s awesome';

// Length
fullName = firstName.length;
console.log(fullName);

// concat()
fullName = firstName.concat(' ', lastName);

// Change case
fullName = firstName.toUpperCase();
fullName = firstName.toLowerCase();

// index of array (start at 0)
fullName = firstName[5];

// indexOf()
fullName = firstName.indexOf('l');
fullName = firstName.lastIndexOf('l');

// charAt() 
fullName = firstName.charAt('0');

// Get last char
fullName = firstName.charAt(firstName.length - 1);

// substring()
fullName = firstName.substring(0, 4);

// slice()
fullName = firstName.slice(0, 4);
fullName = firstName.slice(-3);


// split()
fullName = str.split(' ');
fullName = tags.split(',');

// replace()
fullName = str.replace('Brad', 'Jack');

// includes()
fullName = str.includes('foo');

// output
console.log(fullName);




