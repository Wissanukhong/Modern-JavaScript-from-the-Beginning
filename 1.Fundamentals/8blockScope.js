// Global scope
var a = 1;

// Block scope
let b = 2;
const c = 3;

// function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a, b, c);
}
test();

console.log('Global Scope: ', a, b, c);