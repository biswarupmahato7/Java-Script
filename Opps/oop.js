
function User(userName, loginCount, isLogin){

    this.userName = userName,
    this.loginCount = loginCount
    this.isLogin = isLogin

    return this
}

const userOne =  new User('Biswarup', 3, true)
const userTwo =  new User('Amit', 3, true) 


console.log(userOne);
console.log(userTwo);