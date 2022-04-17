// higher order functions take functions as arguments and/or return functions
function sayHello() {
  return function () {
    return "Hello World";
  };
}

//  example
let numbers = [1, 2, 3];
numbers.map((num) => num * 2);
//map is a higher order function because it takes num as function.

setTimeout(() => console.log("hello"), 1000);
