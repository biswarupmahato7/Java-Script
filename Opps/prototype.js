let myName = 'Biswarup   '

console.log(myName.length); 
//GOAL = remove all the space for Every String
// means create a method by which we can access Every String Length

let myHero = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

//inject a property to all object 
Object.prototype.biswarup = function(){
    console.log("Biswarup is Present");

}

//heroPower is a object so this property must be available in heroPower
//lets check

// heroPower.biswarup() //Available

//Array is also going through Object so , this Property must be in Array also
//lets check

// myHero.biswarup() //Available

//lets check if We inject a property in array its available to Object Or not

Array.prototype.heyBiswarup = function(){
    console.log('Hey Biwarup from arrayPrototype ');
}

myHero.heyBiswarup()
// heroPower.heyBiswarup()  // its not available to Object because Object is not
// going through Array || But if we inject in Object its available to Array, string ,function because all are going through object


//inheritance

//OLD approach

const user ={
    userName: 'Biswarup',
    age: 23
}
const Teacher = {
    makeVideo: true,

}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__:teachingSupport //its reference all the properties of teaching Support 
}

Teacher__proto__ = user //Teacher can use all the property Of user {inheritance}

//New approach

Object.setPrototypeOf(teachingSupport,Teacher) 

let anotherName = 'Ronaldo      '

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length is: ${this.trim().length}`);
}

myName.trueLength()
anotherName.trueLength()
"Amit ".trueLength()




