let firstName = 'Wissanu';
let lastname = 'Khongjandee';

let output;

// concat
outPut = `This my firstname is ${firstName} andm my lastname is ${lastname}`;
console.log(outPut);

// concantination
outPut = firstName + ' ' + lastname;
console.log(outPut);

// Append
outPut = 'John ';
outPut += 'Due';
console.log(outPut);

// Length
outPut = firstName.length;
console.log(outPut);

// function concat
outPut = firstName.concat(' ', lastname);
console.log(outPut);

// Change case
outPut = firstName[3].toUpperCase();
console.log(outPut);

outPut = firstName[3].toLowerCase();
console.log(outPut);

// indexOf()
outPut = firstName.indexOf('W');
console.log(outPut);

outPut = firstName.lastIndexOf('s');
console.log(outPut);

// charArt()
outPut = firstName.charAt('2')
console.log(outPut);

// get last char
outPut = firstName.charAt(firstName.length -1);
console.log(outPut);

// substring
outPut = firstName.substring(0, 4);
console.log(outPut);

// splite
const myAddress = '599/5 Chongonothi Yannawa Bangkok 10120';

// each char
outPut = myAddress.split('');
console.log(outPut);

// each comma
outPut = myAddress.split(' ');
console.log(outPut);

outPut = myAddress.split(',');
console.log(outPut);

// includes()
outPut = myAddress.includes('Chongonothi');
console.log(outPut);
