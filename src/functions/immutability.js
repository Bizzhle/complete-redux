// once object created it cannot be changed
// const does not create an immutability it prevents reassignment

// benefirs
// predictability
// faster change detection
// concurrency

//cons
//performance - takes time to copy
// memory overhead

// do not mutate data in redux

const person = {
  name: "john",
  address: {
    country: "usa",
    city: "new york",
  },
};

// update object 1st method
const updated = Object.assign({}, person, { name: "bob", age: 30 });

// update object 2nd method - spread operator
// - does shallow copy especially for nested objects
// do deep copy for nested objects
const updated2 = {
  ...person,
  address: {
    ...person.address,
    city: "brooklxn",
  },
  name: "Bob",
};
console.log(updated2);
console.log(person);
