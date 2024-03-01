//Declare a number 

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toFixed(2)) // 100.00

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2))  //

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')) //1,00,000

// ++++++++++++++++++ MATH ++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4)) // Negative to +
// console.log(Math.round(4.4)) //4.5>> 5 || 4.4>> 4
// console.log(Math.ceil(4.1)) //take Higher value // 5
// console.log(Math.floor(4.9)) // take lower value //4
// console.log(Math.sqrt(25)) // 5
// console.log(Math.min(4,5,6,4,2,8)) // give min value //2 
// console.log(Math.max(4,5,6,4,2,8)) // give max value //8

console.log(Math.random()) // Give random val 

 //we have to generate a value between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min +1))+min)
