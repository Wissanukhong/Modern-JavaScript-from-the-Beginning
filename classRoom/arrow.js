// Workshop  Problem 1
let user = {
    name: 'John',
    go: function () {
        console.log(this.name)
    }
}
user.go(); // output: John


// Workshop  Problem 2
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

console.log(user.ref.name); // output: undefined


// Workshop  Problem 3
let calculator = {
    read() {
        this.num1 = +prompt("Enter first Number");
        this.num2 = +prompt("Enter second Number");
        // this ใน read จะมีค่าเป็น calculator
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Workshop  Problem 4
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
    }
};

console.log(ladder.up());
