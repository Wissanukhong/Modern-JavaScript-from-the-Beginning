let firstName = 'Wissanu';
let lastname = 'Khongjandee';

let output;

// concat
output = `This my firstname is ${firstName} andm my lastname is ${lastname}`;
console.log(output);

// concantination
output = firstName + ' ' + lastname;
console.log(output);

// Append
output = 'John ';
output += 'Due';
console.log(output);

// Length
output = firstName.length;
console.log(output);

// function concat
output = firstName.concat(' ', lastname);
console.log(output);

// Change case
output = firstName[3].toUpperCase();
console.log(output);

output = firstName[3].toLowerCase();
console.log(output);

// indexOf()
output = firstName.indexOf('W');
console.log(output);

output = firstName.lastIndexOf('s');
console.log(output);

// charArt()
output = firstName.charAt('2')
console.log(output);

// get last char
output = firstName.charAt(firstName.length -1);
console.log(output);

// substring
output = firstName.substring(0, 4);
console.log(output);

// splite
const myAddress = '599/5 Chongonothi Yannawa Bangkok 10120';

// each char
output = myAddress.split('');
console.log(output);

// each comma
output = myAddress.split(' ');
console.log(output);

output = myAddress.split(',');
console.log(output);

// includes()
output = myAddress.includes('Chongonothi');
console.log(output);
