function add(a, b) {
  return a + b;
}

// currying allows us turna function that takes multiple argument into one that takes one argument

function add1(a) {
  return function (b) {
    return a + b;
  };
}

add1(1)(5);
// arrow function representation

const add2 = (a) => (b) => a + b;
add2(2)(5);
