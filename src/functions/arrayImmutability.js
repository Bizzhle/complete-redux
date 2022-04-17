const numbers = [1, 2, 3];

// adding 4 in position 1
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// removing 2
const removed = numbers.filter((n) => n !== 2);

//updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
