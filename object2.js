//singleton

//ket - values
mySym = Symbol("key1")

const JsUser = {
    name : "Biswarup",
    "full name" : "Biswarup Mahato",
    age: 22,
    location : "Purulia",
    email : "biswarupmahato731@gmail.com" ,
    lastLoginDats : ["Sunday", "Monday"],
    [mySym] : "Key2"
}

//De -structuring

const {name:n} = JsUser
console.log(n)



// console.log(Object.keys(JsUser))

// how to access a Object 

// Object.freeze(JsUser)
// JsUser.age = 23
// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["full name"])

// JsUser.greeting = function(){
//     console.log("Hello JS user")
// }

// JsUser.greeting2 = function(){
//     console.log(`Hello Js user, ${this.name}`)
// }

// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

// console.log(JsUser)

// const obj1 ={ 1:'a', 2:'b'}
// const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// const user ={
//     userFullNamme: {
//         firstName: "Biswarup",
//         lastName : "Mahato"
        
//     }
// }

// console.log(user.userFullNamme.firstName)