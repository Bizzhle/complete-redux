// named function
// functions are first class citizens

//function can pe passed as arg to anther ffunction
function sayHello() {
  return function () {
    return "Hello World";
  };
}

let fn = sayHello(); // returns function
let message = fn();
console.log(message);
