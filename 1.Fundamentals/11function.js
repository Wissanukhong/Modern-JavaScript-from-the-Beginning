// Function is the block of code

// Function declarations
function greet() {
  console.log("Hello");
}

greeting();

// Function Expressions
const square = function (x = 3) {
  return x * x;
};

console.log(square());

// Immidiatley Invokable Function Expression - IIFEs
(function () {
  console.log("Start here...");
})();

// Invokable Function Expression = arrow function
(() => {
  console.log('hello');
})();

// Property Method
const todo = {
  add: function() {
    console.log('Add todo....');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }

}

todo.delete = function() {
  console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();