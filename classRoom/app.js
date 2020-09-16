// บวกก่อนค่อยนำค่าไปใช้(++i) 
// let a = 5;
// let c = ++a;
// console.log(c);

// // จะนำค่าไปใช้ก่อนค่อยบวก(i++)
// let b = 10;
// let d = b++;
// console.log(d);

// // workshop ++zero
// let zero = 5;
// let zeroPlus = ++zero;
// console.log(zeroPlus + 5);

// for loop
let cars = ['Suzuki', 'Hobda', 'Toyota'];

let i = 0;
let nameCars = '';
for (i = 0; i < cars.length; i++) {
    nameCars += cars[i] + "<br>";
}

document.getElementById('car').innerHTML = nameCars;