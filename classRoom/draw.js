// Q2
function draw(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += '*';
        }
        result += '\n';
    }
    return result
}

// Q3
function draw(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += j + 1;
        }
        result += '\n';
    }
    return result
}

// Q4
function draw(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += i + 1;
        }
        result += '\n';
    }
    return result
}

//Q5
function draw(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += n - i;
        }
        result += '\n';
    }
    return result
}

// Q6
function draw(n) {
    let count = 1;
    let result = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += count;
            count++;
        }
        result += '\n';
    }
    return result
}

console.log(draw(4))