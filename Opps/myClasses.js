class User{
    constructor(username,email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }


    //Method 
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const u1 = new User('Biswarup','biswarupmahato731@gmail.com','1234')

console.log(u1.encryptPassword());
console.log(u1.changeUserName());