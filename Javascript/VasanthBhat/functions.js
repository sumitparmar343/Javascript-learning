// welcome();
// function welcome() {
//   console.log("welcome to the function");
// }

// const function1 = function () {
//     console.log('anonymous fucntion');
// };
// function1();

// (function () {
//   console.log("self invoking function");
// })();

// function add(num1, num2){
// return num1+num2;
// }
// function test(func, num1, num2){
//     const sum = func(num1, num2);
//     return sum;
// }
// const result = test(add, 2, 5);
// console.log('result is ', result);


// function nesting
function one(){
    console.log('Outer function called');
    function two(){
        console.log('Inner function called');
    }
    return two;
}
const inner = one();
console.log(inner());