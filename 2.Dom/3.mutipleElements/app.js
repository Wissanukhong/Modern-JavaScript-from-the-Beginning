// document.getElementsByClassName
let items = document.getElementsByClassName('collection-item');
console.log(items);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// conver HTML collection into array
lis = Array.from(lis);

// reverse
lis.reverse();
console.log(lis);

// forEach
lis.forEach(function(li, index){
    li.textContent = `${index}: Hello`;
});

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items)

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

liEven.forEach(function(){
    li.style.background = '#fff';
});



