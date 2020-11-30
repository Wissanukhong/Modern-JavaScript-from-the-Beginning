// type conversion
let val;

// number to string
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length)

// Boolean to string
val = String(true);
console.log(val);
console.log(typeof val);

// Date to string
val = String(new Date());
console.log(val);
console.log(typeof val);

// Array to String
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);

// toString
val = (5).toString();
console.log(val);
console.log(typeof val);

// Boolean toSring
val = true.toString();
console.log(val);
console.log(typeof val);

// String to number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello");


val = parseInt("100px");
val = parseFloat(10.5);

// เป็นการแปลงค่าให้เป็นตัวเลข
val = Number.parseInt("12354");
val = Number.parseFloat("12354.25");

// output
console.log(val);
console.log(typeof val);
console.log(val.toFixed());
