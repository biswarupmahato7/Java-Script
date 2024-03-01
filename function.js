// function sum(a,b){
//     return a+b;
// }
// function mul(a,b){
//     return a*b;
// }
// let x=3,y=6;
// let c=sum(x,y)+mul(x,y);
// console.log(c);

//Arrow Function 

// const square=(x)=> x*x;  //(x)-parameters

// const sum=(x,y)=> {
//     console.log('Adding {x} and {y}');
//     return x+y;

// }

// console.log(square(5));

// console.log(sum(4,7));

//Anonymous Function (no name)

// x=function(y){
//     console.log(y*y);
// }

// x(5); //To Access anonymous function

// Immediately Invoked Function Expression (IIFE)

// (function abc(){
//     console.log("HI");
// })();

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,5))

const square = (x) => x*x; 

const sumOfNum = (x,y) => x + y;

const sum =(x,y) => {
    console.log(`Adding ${x} and ${y}`);
    return x+y;
};
const sumAndDiff = (x,y) => ({sum : x+y, difference: x-y});

console.log(square(3));
console.log(sumOfNum(3,4));
console.log(sum(3,10));
console.log(sumAndDiff(3,5));
