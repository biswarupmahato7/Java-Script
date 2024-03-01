
// function addNumber(num1,num2){
//     console.log(num1+num2)
// }

// const result = addNumber(4,6)
// console.log(result) // undefined (BECAUSE WE DON'T RETURN ANYTHING FROM THE Function )

// function addNumber(num1,num2){
//    const result = (num1+num2)
//    return result
// }

 
// console.log("Result is ",addNumber(4,6))

// function cartTotal(...total){
//     return total
 
// }
// console.log(cartTotal(4,5,5)) 

// HOW TO PASS A OBJECT IN FUNCTION 

// const user = {
//     userName: "Biswarup",
//     age: 22
// }

// function catchObject(anyobject ){ // anyobject - for catch any object , we can pass any name here 

//     console.log(`User name is ${anyobject.userName} and age is ${anyobject.age}`)

// }
// catchObject(user)

// catchObject({
//     userName: "Ronaldo",
//     age: 39
// })

//How to pass a Array


// const myArray = [1,2,3,4]

// function returnScore(getArray){
//     return getArray[1]
// }

// console.log(returnScore(myArray))

// const sub = "Mahato"
// function one(){

//     const userName = "Biswarup"

//     function two(){
//         const web = "Youtube"
//         console.log(userName)
        
    
//     }
//     two()
//     // console.log(web)
// }

// one(0)

function addOne(num1){
    return num1+1
}
console.log(addOne(3))

const addTwo = function(num2){
    return num2+1

}

console.log("Add two "+addTwo(3))