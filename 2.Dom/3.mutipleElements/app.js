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
