// Spread and Rest operator
function sumAll(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;
    return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4));

// Explain function
// ...ตามด้วยชื่อ จะเป็นการสร้าง Array ใหม่
// create function sunAll(รับ parameter ด้วย spread เป็นการเชื่อม array)
// create let sum = 0; to storage 
// Used for of สำหรับการวน loop ใน object จากนั้น นำ sum มาบวกค่าก่อน แล้วค่อยให้ผลลัพธ์เป็น arg
// return sum outof function
// console.log(sumAll(1));
// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3, 4));

let arr1 = [1, 2, 5, 8,];

let arr2 = [1, 2, 5, 8,];

let spreadArray = [...arr1, ...arr2];
console.log(spreadArray);