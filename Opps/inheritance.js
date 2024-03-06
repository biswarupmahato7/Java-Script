class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`USERNAME IS ${this.userName}`);
    }
}


class Teacher extends User{

    constructor(userName, email, password){

        super(userName)
        this.email = email,
        this.password = password
    }
    addCourse(){
        console.log(`new course is added by ${this.userName}`);
    }
}

const chai = new Teacher('biswarup' , 'bisw@gmsil.com', 'abc')

chai.addCourse()
chai.logMe()

const masalaChai = new User('masalachai')
// masalaChai.addCourse()
masalaChai.logMe()