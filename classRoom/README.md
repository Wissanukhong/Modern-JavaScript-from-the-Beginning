# In the classroom

## Example code

```js
// บวกก่อนค่อยนำค่าไปใช้(++i)
let a = 5;
let c = ++a;
console.log(c); // 6

// จะนำค่าไปใช้ก่อนค่อยบวก(i++)
let b = 10;
let d = b++;
console.log(d); // 10

// for loop show the value
let cars = ["Suzuki", "Hobda", "Toyota"];

let i = 0;
let nameCars = "";
for (i = 0; i < cars.length; i++) {
  nameCars += cars[i] + "<br>";
}

document.getElementById("car").innerHTML = nameCars;

// codition if else statement
let x = 10;
if (x < 10) {
  console.log(`x มีค่ามากกว่า 10`);
} else {
  console.log(`x มีค่าเท่ากับ 10`);
}
```

#### practice problem

```js
let myStatement = prompt();
let inputNumber = +myStatement; // Solution 1
let inputNumber = number(myStatement); // Solution 2

if (typeof inputNumber == "number" && !isNaN(inputNumber)) {
  if (inputNumber >= 5) {
    let textMore = `ค่าของ myStatement คือ ${inputNumber} มีค่ามากกว่า 5`;
    document.getElementById("statement").innerHTML = textMore;
  } else {
    let textless = `ค่าของ myStatement คือ ${inputNumber} มีค่าน้อยกว่า 5 `;
    document.getElementById("statement").innerHTML = textless;
  }
} else {
  let textError = `Is not a number`;
  document.getElementById("statement").innerHTML = textError;
}
```

**Explain this code**

1. statement
2. สร้างตัวแปร มาไว้รับค่า myStatement มารับค่าด้วย function 3. prompt()
3. สร้างตัวแปร inputNumber มาไว้สำหรับแปลงค่าให้เป็นตัวเลข
4. (number)
5. สร้าง function if ( ตรวจสอบค่าว่าเป็นตัวเลขไหม && ถ้าเป็น !isNaN ){
6. ถ้าค่าของ myStatement มีค่ามากกว่า 5 ให้แสดงค่านี้ออกมาก
7. } else {
8. ถ้าไม่ใช้ให้แสดงค่านี้ออกมา
9. }
10. else
11. ถ้าหากเป็น String ให้แสดงออกมาว่า ไม่ใช้ Number

## Login

```js
let name = prompt("what is your name?");

if (name === "admin") {
  let password = prompt("what is your password?");

  if (password === "codecamp#5") {
    alert("Welcome");
  } else if (password === "" || password === null) {
    alert("cancel");
  } else {
    alert("Wrong password");
  }
} else if (name === "" || name === null) {
  alert("cancel");
} else {
  alert("I don't know you");
}
```

1. Create variable name to get the value with function promt()
2. Used if condition for variable name === "admin"
3. Create let password to get the value with function promt()
4. Used if condition to check password === "codecamp"
5. Used else if condition to check password === "" || password === null

## This keyword

```js
let user = {
  name: "John",
  go: function () {
    console.log(this.name);
  }
};
user.go(); // output: John
```

**Explan**
1. Create object user 
2. Assing the key is name
3. Assign the value : 'John'
4. Create function go inside the object with anonymous function 
5. Create this.name key word 
6. Call the function by user.go();
