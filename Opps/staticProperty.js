class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){ // its dont give the access to the Object
        return `123`
    }
}

 const biswarup = new user('Biswarup Mahato')
//console.log(biswarup.createId())

class Teacher extends user{
    constructor(username,email){
        super(username),
        this.email = email

    }
}

const mahato = new Teacher("mahato","mahato@gmail.com")
mahato.logMe()
console.log(mahato.createId()); // Don't give the Access