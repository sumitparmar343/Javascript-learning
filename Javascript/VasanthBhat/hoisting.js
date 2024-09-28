// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Hoisting allows functions to be used before they are declared.
// Arrow functions are not hoisted.
// Variable declarations are also hoisted, but their values are not initialized until the line of code is executed.
// Function declarations are hoisted, but function expressions are not.
// Variable declarations are hoisted, but their values are not initialized until the line of code is executed.

// test();

// function test() {
//     console.log('test');
// }

// Variable declarations are hoisted, but their values are not initialized until the line of code is executed.

// console.log(a);
// var a = 10;

// Function declarations are hoisted, but function expressions are not.

// console.log(test2);
// var test2 = function() {
//     console.log('test2');
// }

// console.log(test3());
// function test3() {
//     console.log('b', b);
//     var b = 10;
//     return b;
// }

// Function expressions are not hoisted.

// console.log(test4());
// function test4() {
//     console.log(c);
//     const c = 10; // let c = 10  will give error ReferenceError: Cannot access 'c' before initialization
//     return c;
// }

// Interview question on hoisting

// function test5() {

//     // case 1
//     // var a;
//     // var a;

//     // case 2
//     // var a;
//     // var a = 10;
//     // var a = 40;
//     // var a;

//     // case 3
//     // var a;
//     // var a = 10;

//     console.log('a is '+ a);
// }

// test5();

// Interview question on hoisting

// function varTest() {
//     var a = 10;
//     {
//         var a = 40;
//         console.log('a is '+ a);
//     }
//     console.log('a is '+ a);
// }

// varTest();

// function letTest() {
//     let a = 10;
//     {
//         let a = 40; // let is not having a global scope
//         console.log('a is '+ a);
//     }
//     console.log('a is '+ a);
// }

// letTest();

// function letTest() {
//     let a = 10;
//     let a = 40; // This line would throw a SyntaxError: Identifier 'a' has already been declared
//     console.log('a is ' + a);
// }

// letTest();

// tricky question on hoisting

// This is an excellent example to demonstrate how hoisting and function scope work with var declarations in JavaScript. Let's break it down:

// Hoisting: When the getRate function is called, the var rate declaration inside the function is hoisted to the top of the function scope.
// Function scope: The rate variable inside the function is separate from the global rate variable.
// Initialization: While the declaration is hoisted, the initialization (= 20) is not.

// Here's how the function effectively looks after hoisting:
// var rate = 10;
// function getRate() {
//     var rate; // Hoisted declaration, but not initialized
//     if(rate === undefined) {
//         rate = 20; // This is where the initialization happens
//         return rate;
//     } else {
//         return rate;
//     }
// }

// console.log("Rate is " + getRate()); // Rate is 20
// var rate = 10;
// function getRate() {
//     if(rate === undefined) {
//         var rate = 20;
//         return rate;
//     }else{
//         return rate;
//     }
// }
// console.log("Rate is ", + rate); // Rate is 10

// console.log("Rate is ", + getRate()); // Rate is 20

// Temporal dead zone

// let and const declarations are hoisted, but they are not initialized with a default value.
// They are in a "temporal dead zone" from the start of the block until the declaration is processed.
// This means that trying to access them before the declaration results in a ReferenceError.
// let and const declarations are hoisted, but they are not initialized with a default value.

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// const b = 10;

// Question on Temporal dead zone Explain the scope of temporal dead zone

// Ans: Temporal dead zone (TDZ) is the period of time during which the let and const declarations cannot be accessed. It starts from the block start to the variable declaration.

// let letVar = 10;
// {
//     // temporal dead zone starts
//     const func = () => console.log(letVar)
//     // temporal dead zone ends
//     let letVar = 20;
//     func(); // 20
// }
// console.log(letVar);  // 10

// // 2nd variation
// {
//     // temporal dead zone starts
//     func(); // ReferenceError: Cannot access 'func' before initialization
//     const func = () => console.log(letVar)
//     // temporal dead zone ends
//     let letVar = 20;
// }

// 3rd variation

// {
//     // temporal dead zone starts
//     const func = () => console.log(letVar)
//     func(); // Cannot access 'letVar' before initialization
//     // temporal dead zone ends  ß
//     let letVar = 20;
// }

// 4th variation
// {
//     test(); // arrow function is not hoisted so it will give ReferenceError: Cannot access 'test' before initialization
//     const test = () => {
//         console.log('test');
//     }
// }

// Question -- why var hoisting is present in javascript?
// Ans: Note: var hoisting is present in javascript to avoid errors and unexpected behavior. It allows us to use variables before they are declared.

// function test() {
//     console.log(a);
//     var a = 20;
// }
// test(); // undefined

// Question -- why let and const hoisting is not present in javascript?
// Ans:  `let` and `const` are hoisted, but they introduce the concept of the Temporal Dead Zone to make variable declarations more predictable and to catch potential errors earlier. This behavior was intentionally designed to improve upon the sometimes confusing behavior of `var` hoisting.

// let a = 10;
// function test() {
//     console.log(a);
//     let a = 20;
// }

// Question --  How hoisting works in javascript if it is interpreted language? 
// Interpreted language means line by line execution    
    // JavaScript's nature:
        // While often called "interpreted", modern JavaScript is actually a mix of interpreted and compiled.
        // JavaScript engines use Just-In-Time (JIT) compilation for performance.
    // Execution process:
        // Parsing: The code is read and checked for syntax errors.
        // Compilation: The code is converted to an intermediate representation or machine code.
        // Execution: The compiled code is run.
    // Hoisting during compilation:
        // During the compilation phase, the engine scans for declarations (variables and functions).
        // It sets up memory space for these declarations before executing the code.
// Ans: hoisting is possible because JavaScript has a compilation step, even though it's often referred to as an interpreted language. This compilation step allows for the scanning and processing of declarations before the code is executed.

// console.log(a); // undefined 
// var a = 10;

// function test() {
//     console.log(b); // undefined 
//     var b = 20;
// }
// test(); // undefined
