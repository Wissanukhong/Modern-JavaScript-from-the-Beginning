// forEach เป็นการ Loop array เพื่อนำค่าออกมาแสดง
let cars = ['Toyota', 'Honda', 'Mazda'];
console.log(cars); //[ 'Toyota', 'Honda', 'Mazda' ]

cars.forEach(function (car) {
  console.log(car);
  // Toyota
  // Honda
  // Mazda
});

// forEach
const brands = ['Apple', 'Sumsung', 'Asus'];
brands.forEach(function (brand, index) {
  console.log(`${index} : ${brand}`);
});
