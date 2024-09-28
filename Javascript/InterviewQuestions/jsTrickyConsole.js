// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// };

// var a = 10;
// (() => {
//     console.log(a);
//     let a = 20;
//     console.log(a);
// })(); // will give error 

// setTimeout(() => {
//     console.log('setTime out timmer');
// }, 0);
// console.log('hello');
// console.log('hi');

// console.log(1<2<3); // true
// console.log(3>2>1); // false

const obj = {
    a: 10,
    b: 20, c: {
        d: 30,
        e: 40
    }
};
const { c: {d, e=10}} = obj;
console.log(d,e); // 30 40