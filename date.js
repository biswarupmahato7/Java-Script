// let myDate = new Date()

// console.log(myDate) //Thu Feb 15 2024 12:17:51 GMT+0530 (India Standard Time)
// console.log(myDate.toString()) // Thu Feb 15 2024 12:21:22 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Thu Feb 15 2024
// console.log(myDate.toLocaleDateString()) // 2/15/2024
// console.log(myDate.toISOString()) // 2024-02-15T06:49:39.579Z
// console.log(myDate.toTimeString())  // 12:17:51 GMT+0530 (India Standard Time)


let myCreatDate = new Date(2023, 0, 23)
let myCreatDate2 = new Date("2024-02-15")

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatDate.getTime()) //giives value in Mile Second
console.log(Math.floor(Date.now()/1000)) //convert it into Second


