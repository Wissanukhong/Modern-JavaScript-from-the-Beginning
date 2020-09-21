// problem 1+2+3+4... 128
let sum;
for (i = 0; i < 128; i++) {
    sum = sum + i;
    console.log(sum);
}

// Problem 2+4+6+8...248
let sum = 0;
for (i = 2; i < 248;) {

    sum = sum + i;
    i += 2;
    console.log(sum);
}
