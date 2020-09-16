let grade = prompt('Press your grade here');
let convertGrade = Number(grade);

if (grade > 101) {
    console.log('Something wrong');
} else {
    if (grade >= 80 & grade <= 100) {
        console.log(`Your grade is ${grade} your get A`);
    } else if (grade >= 70 & grade <= 79) {
        console.log(`Your grade is ${grade} your get B`);
    } else if (grade >= 60 & grade <= 69) {
        console.log(`Your grade is ${grade} your get C`);
    } else if (grade >= 50 & grade <= 59) {
        console.log(`Your grade is ${grade} your get D`);
    } else {
        console.log(`Your grade is ${grade} your get F`);
    }
}