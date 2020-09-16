// statement
// สร้างตัวแปร มาไว้รับค่า myStatement มารับค่าด้วย function prompt()
// สร้างตัวแปร inputNumber มาไว้สำหรับแปลงค่าให้เป็นตัวเลข (number)
// สร้าง function if ( ตรวจสอบค่าว่าเป็นตัวเลขไหม && ถ้าเป็น !isNaN  ){
// ถ้าค่าของ myStatement มีค่ามากกว่า 5 ให้แสดงค่านี้ออกมาก    
// } else {
// ถ้าไม่ใช้ให้แสดงค่านี้ออกมา  
// }
// else 
// ถ้าหากเป็น String ให้แสดงออกมาว่า ไม่ใช้ Number 

let myStatement = prompt();

let inputNumber = +myStatement;

if (typeof inputNumber == "number" && !isNaN(inputNumber) ) {
    if (inputNumber >= 5) {
        let textMore = `ค่าของ myStatement คือ ${inputNumber} มีค่ามากกว่า 5`;
        document.getElementById('statement').innerHTML = textMore;
    } else {
        let textless = `ค่าของ myStatement คือ ${inputNumber} มีค่าน้อยกว่า 5 `;
        document.getElementById('statement').innerHTML = textless;
    }
} else {
    let textError = `Is not a number`;
    document.getElementById('statement').innerHTML = textError;
}