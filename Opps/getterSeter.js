class User{
    constructor(email,password){
       this.email = email,
       this.password = password 
    }
    // get email(){

    // }

    //here if we try to set/get values using set or get method, then the contractor & set/get 
    //method both are try to set/get so its create a problem Maximum call stack size exceeded
    // this._password 
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value

    }
}

const biswarup = new User("biswarup@gmail,com",'abc')

console.log(biswarup.password);