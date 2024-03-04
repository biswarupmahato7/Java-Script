function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

multipleBy5.biswarup = 'biswarup' //custom Property 

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.biswarup);
// console.log(multipleBy5.prototype);

function createUser(userName,score){
    this.userName = userName,
    this.score = score

}

createUser.prototype.increment = function(){ //inject method
    this.score++
}

createUser.prototype.printMe = function(){ //inject method
    console.log(`Price is ${this.score}`);
}

const chai = new createUser('chai', 25)
const coffee = new createUser('coffee',100)

chai.printMe()
coffee.printMe()




