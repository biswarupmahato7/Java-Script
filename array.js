// console.log(this);

//values and Data types

//primitive data types

//number: 3,4,5.5,6,75
//String: "Biswarup" or 'Biswarup'
//Boolean: true ,false
//null: 
// undefined

//Non Primitive Data Type
//Array
//let names=["Biswarup" ,"Amit", "Bipul" ,24,0.3,true]

//let a=5;
// let b=8;
// let sum=a+b;
// console.log("sum is-"+sum)

// let pwCoursePrice = 300
// let gstOnCourse = 36
// let finalPricr = pwCoursePrice + gstOnCourse
// console.log(finalPricr)

// let value1 = true
// let isLogin = true;
// isLogin ? console.log("home page"): console.log('Loginpage')
// var num=8
// var num=9

// console.log(3+4+"3");
//let x=1
// for(let x=1;x<5;x++){

//     if(x ===3) continue;
//     console.log(x);
// }

// const name="BISWARUP";
// console.log(name());

// let arr = [1,2,3,4,5];
// arr[1]=0;
// console.log(arr);
//let b=new Array(1,3,4,5,6,7,9);
// console.log(b.length);
// console.log(b);
// b.push(77);
// console.log(b);
// b.pop();
// console.log(b);
// b.shift();  // remove idx-1
// console.log(b);
// b.unshift(6);
// console.log(b);
// let b=new Array(1,3,4,5,6,7,9);
// let a=[1,2,0,0];
// let c = b.concat(a);
// console.log(c);

// d=b.join(" ");
// console.log(d);

// b.reverse();
// console.log(b);
// console.log(b.indexOf(3)); //Get the idx of any element 

// console.log(b.slice(1,4)); // asses a continuos sub array 
// b.splice(2,0,3);  // insert element  in the middle of the array(position ,if we want to delete ele, insert element)
// console.log(b);


// let arr=[1,2,3,4,5];
// arr.splice(2,0,22)
// console.log(arr);


// let a=[1,2,3,4,5]
// console.log(a)
// console.log(a.length)
// a.push(5) //add element is last idx
// a.pop(5) //remove element in last idx
// a.shift() //remove starting idx
// a.unshift(8) //add in starting idx
// a.splice(2,0,11)// add element in any index (idx,if delete,element)
// console.log(a)
// console.log(a.indexOf(3)) // return the idx of 3
// console.log(a.slice(2,4)) //Return a array from star idx(2) to end-1 idx

// let a1=[9,8,7,6];
// let a2=a.concat(a1); //add two array
// console.log(a2)


// let myArray = [1, 2, 3, 4,5,6]
// console.log(myArray)

// let newArray = myArray.join()
// console.log(newArray) 
// let myn1 = myArray.slice(1,3)
// console.log("Original array - "+ myArray)
// console.log("slice-"+myn1)


// let myn2 = myArray.splice(1,3)
// console.log("Original array - "+ myArray)
// console.log("splice- "+myn2)


// let name1 = ["Biswarup", "Amit", "Sumit", "Sandeep"]
// let name2 = ["Raj", "Khana", "Aditi"]
// name1.push(name2)
// // console.log("Push "+name1.push(name2))
// console.log(name1)
// console.log("Concat "+name1.concat(name2))

// let number = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
// let number2 = number.flat(Infinity) // .flat take depth as a argument 
// console.log(number2) 

// console.log(Array.isArray("Biswarup"))
// console.log(Array.from("Biswarup"))

let score1 = 100
let score2 = 300
let score3 = 200

console.log(Array.of(score1,score2,score3))