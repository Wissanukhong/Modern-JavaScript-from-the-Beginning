const name = 'John';
const age = 30;
const job = 'Web developer';
const city = 'Bangkok';

// with es5
let es5 =
    '<h1>ES5</h1>' +
    '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>age: ' + age + '</li>' +
    '<li>job: ' + job + '</li>' +
    '<li>city: ' + city + '</li>' +
    '</ul>';

document.body.innerHTML = es5;

// with es6
let es6 = `
<h1>ES6</h1>
<ul>    
    <li>Name: ${name}</li>
    <li>age: ${age}</li>
    <li>job: ${job}</li>
    <li>city: ${city}</li>
</ul
`
document.body.innerHTML = es6;
