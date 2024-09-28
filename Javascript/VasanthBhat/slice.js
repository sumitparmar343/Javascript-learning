// Creating copies:
// const original = [1, 2, 3];
// const copy = original.slice();
// console.log(copy); // [1, 2, 3]

// Extracting portions:
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const middle = fruits.slice(1, 3);
// console.log(middle); // ['banana', 'cherry']

// Shallow copying:
// const nested = [[1], [2], [3]];
// const shallowCopy = nested.slice();
// nested[0].push(4);
// console.log(shallowCopy); // [[1, 4], [2], [3]]

// Converting array-like objects:
// function example() {
//     const args = Array.prototype.slice.call(arguments);
//     console.log(args);
// }
// example(1, 2, 3); // [1, 2, 3]

// Negative indexing: 
// const numbers = [1, 2, 3, 4, 5];
// const lastTwo = numbers.slice(-2); 
// console.log(lastTwo); // [4, 5]