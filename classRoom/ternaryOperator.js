let age = 18;

if (age <= 18) {
    console.log('คุณสามารถเข้าได้');
} else {
    console.log('คุณไม่สามารถเข้าได้ ');
}

// Explain
// สร้างตัวแปร age = 18
// if ( ถ้า age มากกว่า หรือว่า เท่ากับ 18 ) {
// ให้แสดงค่าออกมาว่า คุณสามารถเข้าได้
// } else {
// แต่ถ้าไม่ใช้ให้แสดงคำว่า คุณไม่สามารถเข้าได้
// }


// เขียนแบบ ternary style
// (condition) ? true : False 
let myAge = 18
let massege1 = (myAge <= 18) ? 'คุณสามารถเข้าได้' : 'คุณไม่สามารถเข้าได้'

// Do you my name
let name = prompt('Do you know my name');
let massege2 = 'wissanu'

if (name === massege2) {
    alert('คุณรู้จักชื่อฉัน');
} else {
    alert('คุณไม่รู้จักชื่อฉัน');
}

// ternary
let myName = prompt('Do you know my name');
let massege3 = 'wissanu'

let sendAlert = (massege3 == myName) ? 'You know my name' : 'You do not know my name';

alert(sendAlert);