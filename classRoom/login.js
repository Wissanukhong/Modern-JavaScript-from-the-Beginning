// Login 

let name = prompt("what is your name?");

if (name === "admin") {
    let password = prompt("what is your password?");

    if (password === "codecamp#5") {
        alert("Welcome")
    } else if (password === "" || password === null) {
        alert("cancel");
    } else {
        alert("Wrong password")
    }
} else if (name === "" || name === null) {
    alert("cancel");
} else {
    alert("I don't know you");
}