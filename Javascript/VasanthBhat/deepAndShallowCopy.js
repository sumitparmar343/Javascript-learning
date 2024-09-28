// Deep Copy vs Shallow Copy
    // Deep Copy:
        // A deep copy creates a new object or array and recursively copies all its contents.
        // It creates a completely independent copy.
        // Changes in the original object or array do not affect the copied object or array.
        // Deep copy is slower and more memory-intensive.
    // Shallow Copy:
        // A shallow copy creates a new object or array but does not create copies of nested objects or arrays.
        // It creates a new reference to the original object or array.
        // Changes in the original object or array do affect the copied object or array.
        // Shallow copy is faster and less memory-intensive.    

// Example of Deep Copy:
// 1st Example
// let x = 10;
// let y = x;
// console.log(x, y); // 10 10
// x = 20;
// console.log(x, y); // 20 10   

// 2nd example
// const originalArray = [1, 2, [3, 4]];
// const deepCopiedArray = JSON.parse(JSON.stringify(originalArray));
// console.log(originalArray); // [1, 2, [3, 4]]  
// console.log(deepCopiedArray); // [1, 2, [3, 4]]
// originalArray[2][0] = 10;
// console.log(originalArray) // [1, 2, [10, 4]]   
// console.log(deepCopiedArray); // [1, 2, [3, 4]]

// Example of Shallow Copy
// const originalArray = [1, 2, [3, 4]];
// const shallowCopiedArray = originalArray;
// console.log(originalArray); // [1, 2, [3, 4]]  
// console.log(shallowCopiedArray); // [1, 2, [3, 4]]
// originalArray[2][0] = 10;
// console.log(originalArray) // [1, 2, [10, 4]]   
// console.log(shallowCopiedArray); // [1, 2, [10, 4]]


// Question 1 on shallow Copy or deep Copy
// function shallowCopy() {
//     let arr1 = [1,2,3,4,5];
//     let arr2 = arr1;
//     arr2.push(10);
//     console.log(arr1, arr2);  
// }
// shallowCopy();

// Question 2 Make the above question1 to a deep copy
// function deepCopy() {
//     let arr1 = [1,2,3,4,5];
//     let arr2 = arr1.slice();
//     arr2.push(10);
//     console.log(arr1, arr2);  
// }
// deepCopy(); 

// Question 3 Make the above question 1 a deep copy 
// function deepCopy() {
//     let arr1 = [1,2,3,4,5];
//     let arr2 = [...arr1];
//     arr2.push(10);
//     console.log(arr1, arr2);  
// }
// deepCopy(); 

// Question 4 Make the above question 1 a deep copy using string
// function deepCopy() {
//     let arr1 = [1,2,3,4,5];
//     let arr2 = JSON.parse(JSON.stringify(arr1));
//     arr2.push(10);
//     console.log(arr1, arr2);  
// }
// deepCopy(); 

// Question 5 Deep Copy or shallow Copy ?
// function shallowCopy1() {
//     let obj1 = { name: 'Vasanth', age: 25 };
//     let obj2 = obj1;
//     obj2.name = 'Sumit';
//     console.log(obj1, obj2);  
// }
// shallowCopy1(); // { name: 'Sumit', age: 25 } { name: 'Sumit', age: 25 }

// Question 6 make deep copy of question 5 using spread operator
// function shallowToDeep() {
//     let obj1 = { name: 'Vasanth', age: 25 };
//     let obj2 = {...obj1};
//     obj2.name = 'Sumit';
//     console.log(obj1, obj2);  
// }
// shallowToDeep(); // { name: 'Vasanth', age: 25 } { name: 'Sumit', age: 25 }

// Question 7 make deep copy of question 5 using object.assign
// function shallowToDeep7(){
//     let obj1 = { name: 'Vasanth', age: 25};
//     let obj2 = Object.assign({}, obj1);
//     obj2.name = 'sumit';
//     console.log(obj1, obj2);
// }
// shallowToDeep7();

// Question 8 Make deep copy of nested object 
// spread operator and object.assign won't be able to make deep copy of nested object.
// function deepCopyOfNestedObject(){
//     let obj1 = {
//         name: 'vasanth',
//         age: 25,
//         location: {
//             city: 'bangalore',
//             state: 'karnataka'
//         }
//     };
//     let obj2 = JSON.parse(JSON.stringify(obj1));
//     obj2.location.city = 'Mysore';
//     console.log(obj1, obj2);
// }
// deepCopyOfNestedObject();

// Question 9 Json parse json stringify won't work to make deep copy for date function.
// function question9(){
//     const obj1 = {
//         sampleDate: new Date(),
//     };
//     const obj2 = JSON.parse(JSON.stringify(obj1));
//     console.log(obj1, obj2);
// }
// question9(); // { sampleDate: 2024-09-15T09:03:20.785Z } { sampleDate: '2024-09-15T09:03:20.785Z' }

// Question 10: Json parse json stringify won't make deep copy for function and undefined value assigned
// function question10(){
//  const obj1 = {
//     sampleFunction: console.log,
//     sampleUndefined: undefined,
//  };
//  const obj2 = JSON.parse(JSON.stringify(obj1));
//  console.log(obj1, obj2); // { sampleFunction: [Function: log], sampleUndefined: undefined } {}
// }
// question10();

// Question 11: Json parse json stringify won't make deep copy for function, infinity, NaN, undefined 
// function question11(){
//     const obj1 ={
//         sampleFunction: () => null,
//         sampleInfinity: -Infinity,
//         sampleNaN: NaN,
//     };
//     const obj2 = JSON.parse(JSON.stringify(obj1));
//     console.log(obj1, obj2); // { sampleFunction: [Function: sampleFunction], sampleInfinity: -Infinity, sampleNaN: NaN} { sampleInfinity: null, sampleNaN: null }
// }
// question11();

//Note: Article to read on stringy and parse methods -- https://www.freecodecamp.org/news/json-stringify-method-explained/

// Question 12: How to make deep copy of JSON Unsafe values
// Copying all values one after another.
// Recursive copying all the values one after another.
// Using libraries like lodash.

// Question 13:  why array and objects are shallow copy and primitive types(Number, string, boolean) are made deep copy?
// Ans: 
//    - Copying large objects/arrays by value would be memory-intensive.
//    - Primitive types are small, so copying by value is efficient.
//    - Allows efficient handling of complex data structures.
//    - Prevents unnecessary duplication of large data.
