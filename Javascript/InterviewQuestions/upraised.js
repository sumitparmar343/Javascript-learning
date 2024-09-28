// Question 1 what will be the output on button click
// const [count, setCount] = useState();
// const handleClick = () => {
//     console.log(count);
// } 

// Question : Javascript is Async or sync? 
// Question : what is hook?
// Question : useref
// 

// Question 2
let count;
const [count, setCount] = useState(0);

const handleClick = () => {
    setCount(count + 1);
    console.log(count);
}

// Question
// console.log("hi")
// setTimeout(()=>{
//     console.log("INISIDE")
// },2000)
// console.log("bye")
// Ans: // hi
        // bye
        // INISIDE

// Question 
// console.log("hi");
// setTimeout(() => {
//     console.log("INISIDE");
// }, 0)
// console.log("bye");
// Ans: // Even with a 0ms delay, setTimeout callback is executed after all synchronous code.
        // This demonstrates JavaScript's non-blocking, asynchronous nature.
        // The event loop and callback queue manage the execution of asynchronous tasks.
        // This behavior is crucial for understanding how JavaScript handles asynchronous operations, especially in scenarios involving I/O operations or API calls.

//  Question what will be the output?
// setTimeout(()=>{
//     console.log("INISIDE")
// },2000)
// synchrounous OPERATION running for 10 seconds!
// console.log("bye")
// Ans: // The setTimeout is scheduled to run after 2000 milliseconds (2 seconds).
        // However, there's a synchronous operation that runs for 10 seconds. This blocks the main thread.
        // JavaScript is single-threaded, so it can't execute the setTimeout callback until the main thread is free.
        // After the 10-second synchronous operation completes, console.log("bye") is executed immediately.
        // Then, the event loop checks for any pending callbacks. It finds the setTimeout callback and executes it, logging "INISIDE".