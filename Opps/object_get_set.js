const User ={
    _email: "biswa@gmail.com",
    _pasword: 'abd',

    get email(){
        return this._email.toUpperCase()

    },

    set email(value){
        this._email = value

    }
}

const biswa = Object.create(User) //Factory Function just like Contractor Function {new}

console.log(biswa.email);
// console.log(biswa.password);
