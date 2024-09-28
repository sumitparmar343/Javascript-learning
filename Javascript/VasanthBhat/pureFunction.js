// Pure function:
// A pure function is a function that always returns the same output for a given input and has no side effects.
// It does not modify any external state or data.
// Pure functions are predictable and easier to test.

// Example of a pure function:
// function add(a, b) {
//     return a + b;
// }

// Example of pure function:
// const words = ["hey", "Sumit"];
// const result = words.filter((word) => word.length > 3); // words.filter is a pure function as it does not modify the original array.
// console.log(result); // ['Sumit']

// Another tricky Example of pure function:
// function functionWithSideEffect() {
//   const words = ["hey", "Sumit"];
//   const result = words.filter((word) => word.length > 3); // words.filter is a pure function as it does not modify the original array.
//   console.log(result); // ['Sumit'] The console.log statement is interacting with the external environment (the console), which is a side effect.
// }

// console.log('hey Sumit'); // Is an example of pure function as it will always retujrn undefined.
// let consoleText = console.log('hey Sumit'); // hey Sumit
// console.log('console value is', consoleText); // console value is undefined

// Question: Not a pure function
// function areaOfRectangle(length, width) {
//     console.log("Area of rectangle is", length * width); // side effect
//     return length * width;
// }
// areaOfRectangle(10, 20); // Area of rectangle is 200

// Impure function:
// An impure function is a function that can have side effects, meaning it can modify external state or data.
// It can also have unpredictable behavior based on external factors.
// Impure functions are harder to test and debug.

// Example of an impure function:
// let result = 0;
// function addToResult(value) {
//     result += value;
//     return result;
// }

// Another Example of an impure function:
// function addToResult(lenght, width) {
//     const temp = Math.floor(Math.random() * 100);
//     return lenght * width * temp;
// }

// In the above example, the function addToResult is impure because it modifies the external variable result.
// The function add is pure because it always returns the same output for a given input and does not modify any external state.
