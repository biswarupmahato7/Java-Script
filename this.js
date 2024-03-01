// const user = {
//     userName : "Biswarup",
//     age : 22,
//     welcomeMessage: function(){
//         console.log(`Hi, ${this.userName} welcome , Your age is: ${this.age}`)
//     }
// }
// user.welcomeMessage()
// user.userName = "Apurba"
// user.welcomeMessage()

// function user2(){
//     const userName = "Biswarup"

//     console.log(this.userName)

// }
// user2()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(3,6))


// const addTwo = (num1, num2)=> (num1 + num2)
    
// console.log(addTwo(3,6))

(function db(){
    console.log("Connected to DB")
})();

( (name) => {
    console.log(`CONNECTED DONE ${name}`)
}) ('Biwarup')

