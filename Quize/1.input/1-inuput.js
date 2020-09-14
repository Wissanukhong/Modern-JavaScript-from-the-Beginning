// เขียนโปรแกรมรับ input 1 ตัว ที่เป็นจำนวนเต็มบวก และ ตรวจสอบว่าเป็นเลขคู่ หรือว่า เลขคี่ 
// ถ้าเป็นเลขคี่ ให้พิมพ์คำว่า even 
// ถ้าเป็นเลขคู่ ใฟ้พิมพ์คำว่า old

let myNumner = 4;

if (myNumner % 2 == 0) {
    console.log('event');
} else {
    console.log('old');
}

// upgrade
let yourNumber = ~~prompt('press your number between 1-9');

if (yourNumber % 2 == 0) {
    console.log('event');
} else {
    console.log('old');
}