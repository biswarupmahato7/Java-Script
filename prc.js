// // Object Create

// // let obj = {id:101, name:'Biswarup'} //1
// // console.log(`it is obj`,obj);

// //empty Object               
// let emp = new Object(); //2
// //assign in Empty Object
// emp.id=102;
// emp.name='Amit';
// console.log(`it is emp`,emp);

// function Emp(i,n,s){
//     this.id=i;
//     this.name=n;
//     this.salary=s;
// }

// const e  = new Emp(102,'Sumit',1000);
// console.log(e);

// //Access value of a Object
// // console.log(emp.id);
// // console.log(emp['name']);

// // console.log(e.id)
// // console.log(e['name']);
// // console.log(e.salary);

// delete emp.id
// console.log(emp);

// const btn = document.getElementById("button");
// const randomColor = () =>{
//     let val = "0123456789ABCDEF";
//     let cons = "#";

//     for(let i=0; i<6 ; i++){
//         cons = cons + val[Math.floor(Math.random() * 16)];
//     }
//     return cons;

// };

// // console.log(randomColor());

// function changeRandomColor(){
//     document.body.style.backgroundColor = randomColor();
// }
// btn.addEventListener("click", changeRandomColor);



// const powerTwo = (n) =>{
//     return n**2
// }

// function powerCube(powerrTwo,n){
//     return powerTwo(n) * n
// }
// // console.log(powerCube(powerTwo,3))

// const higherOrder = (x) =>{
//     const oneFun = y =>{
//         const twoFun = z =>{
//             return x + y + z
//         }
//         return twoFun
//     }
//     return oneFun
// }

// console.log(higherOrder(2)(3)(4));

// const powerTwo = n =>{
//     return n**2
// }

// function powerCube(powerrTwo,n){
//     return powerTwo(n) * n
// }

// // console.log(powerCube(powerTwo,4));

// const higherOrder = x =>{

//     const oneFun = y =>{

//         const twoFun = z =>{

//             return x * y * z
//         }
//         return twoFun
//     }
//     return oneFun
// }

// console.log(higherOrder(2)(2)(2));

// let arr = [2,3,4]

// arr.forEach(function(ele, idx, arr){
//     console.log(idx, ele, arr);

// })

// arr.forEach((ele, idx, arr)=>{
//     console.log("arrow", idx, ele, arr);

// })

// const heros = ["bisraj", "ron", "bip", "ralraj"]
// heros.forEach((el) => {
// console.log(el.toUpperCase())
// })

//MAP--SAME AS FOR EACH

// arr.map(function(ele, idx, arr) {
//     console.log(ele, idx, arr);
// })

// heros.map((ele) =>{
//     console.log(ele.toUpperCase());

// })


// filter 

// const herosWithRaj = heros.filter((h) =>{
//     return h.endsWith('raj')
// })
// console.log(herosWithRaj);

// Example  Shopping cart

// const cardBill = [20, 30, 40]
// const sumOfCardBill = cardBill.reduce((prev, curr) =>prev + curr,0)

// console.log(sumOfCardBill)

// const gameScore = [200, 300, 310, 400,150]

// check if all val are number 

// const checkGameScore = gameScore.every((v) => typeof v === 'number')
// console.log("Result" ,checkGameScore)

// gameScore.sort((a,b) => a-b)
// console.log(gameScore)

// let pattern = "bi"

// let regExOne = new RegExp(pattern)

// let flag = 'gi'
// let regExTwo = new RegExp(pattern, flag)

// let regExThree = /bi/gi

// const strChecker = "My name is Biswarup mahato , my self biswarup, bipul is my friend"

// //option -1 (using regular Exp)
// const result = regExThree.test(strChecker)
// console.log(result)

// //option -2() (using String)

// const anotherResult = strChecker.match(regExThree)
// console.log(anotherResult)

// const oneMoreResult = strChecker.replace(regExThree, 'b-i')
// console.log(oneMoreResult)

// //Use case

// const webUrl = "https://pwskills.com/biswarup%70mahato"

// const useUrl = webUrl.replace(/%70/,'-') //use /d -for number
// console.log(useUrl)


// let num =  prompt("Enter a number: ");

// if( num % 5 === 0){
//     console.log('Number is Multiple by 5');
// }
// else{
//     console.log(' Can not Multiple by 5')
// }

// let userName = "Biswaruop Mahato"
// let password = "1234"
// const age = 22
// let bloodGroup;

// console.table([userName,password,age,bloodGroup])

// console.log(typeof "Biswarup")
// console.log(typeof 12)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof true)

//string to int 

// let score = undefined

// let valueInNumber = Number(score) 
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

//int to boolean 
// let login = undefined

// let booleanLogin = Boolean(login)
// console.log(booleanLogin);

//int to String

// let str = 33

// let stringNumber = String(str)
// console.log(stringNumber);
// console.log(typeof(stringNumber))

// console.log(1+"2")
// console.log("1"+2)
// console.log("1"+2+2)
// console.log(1+2+"2")

// console.log(2=="2")
// console.log(2==3)
// console.log(2==="2")

// let name = "Biswarup"
// let anotherName = name

// anotherName = "Biswarup Mahato"
// console.log(name);
// console.log(anotherName)

// let userOne = {
//     email: "mahato@gmail.com",
//     upi: "user1@ybl"
// }

// let userTwo = userOne

// userTwo.email = "biswarup@gmail.com"
// console.log(userOne.email);
// console.log(userTwo.email)




// let score = 200

// score = 100
// console.log(score);

// if(score >100)
// {
//     const  power = "Fly"
//     console.log(`My power is: ${power}`)
// }
// console.log(`Outside of the scope: ${power}`)

// let myItems = [1,2,3,4,5]



// const myTotal = myItems.reduce(function(acc, curVal){
//     console.log(`acc= ${acc} and curVal= ${curVal}`);
//     return acc + curVal

// },0)

// const myTotal = myItems.reduce((acc, curVal)=> acc + curVal ,0)

// console.log(`My current Total : ${myTotal} `);


// let myCart = [
//     {productName : 'Shop',
//       price: 50},

//       {productName : 'Biscuit',
//       price: 90},

//       {productName : 'cake',
//       price: 70},

//       {productName : 'Chocolate',
//       price: 100},
// ]

// const myBill = myCart.reduce( (acc, items)=> acc + items.price ,0)

// console.log(`My total bill ${myBill}`);

// const arr = [1,2,3,4]
// const arr2 = [5,6,7,8]

// let arr3 = [...arr,...arr]
// console.log(arr3);

// function manyArg(...args){

//   let myArray = args.map( (e) =>e)
//   console.log(myArray);

// }

// manyArg(1,2,3,4,5,8)

// let name = "Biswarup"
// let age = 23

// console.log(`My Name is ${name} ans age is ${age}`);

// let name = new String('Biswarup')
// console.log(name.length);
// console.log(name.toLowerCase());

// let name = new String('  Biswarup Mahato')
// console.log(name.trim());
// console.log(name);

// let url = 'https://biswarup.com%20/biswa%20mahato'

// console.log(url.replace('%20','_'));

// let name = 'My Name is Biswarup Mahato '

// console.log(name.replaceAll(' ',''));

// let num = 23
// console.log(num.toFixed(2));
// let num2 = 123.4087
// console.log(num2.toPrecision(5));

// let rs = 100000
// console.log(rs.toLocaleString('en-IN'));

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min ) +min));

// let myDate = new Date()
// // console.log(myDate.toString());

// console.log(myDate.toLocaleDateString());

// let myCreatDate = new Date('2024-02-24')

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

// function add(a,b){
//   return a + b
// }
// console.log(add(5,7));


// function cartTotal(...total){
//   return total
// }

// console.log(cartTotal(3,4,5,6));

// function cartTotal(...total){
//   // let Total = 0
// //  total.forEach((el)=> el+=el)

// let  add = 0
// for (let index = 0; index < total.length; index++) {
//    add += total[index]
// }
// return add


// }

//  let Total2 = cartTotal(3,4,5,6,7)
// console.log(`Total cost is ${Total2}`);
// --------------------------------------------
// let arr = [1,2,3,4]
// let sum = 0;

// arr.forEach(function(val){
//   sum+=val 
//   //  console.log(cal);
   
// })

// console.log(`For each loop : ${sum}`);
// // /////////////////////////////////////////

// let cal2 = 1
// for( let i = 0; i<arr.length; i++){

//    cal2 *= arr[i] 
//   // return cal2

// }
// console.log(`for loop return ${cal2} `);
// let add = 0;

// function myFun(items){
//         add+=items;
// }

// console.log(arr.forEach(myFun))


// let oneSrt = new Set()
// oneSrt.add(2)
// oneSrt.add(4)
// oneSrt.add(3)
// oneSrt.add(5)

// let myArr = [1,2,3,4]
// let newSet = new Set(myArr)

// // console.log(oneSrt);
// console.log([...newSet]);

// function setDiff(setA, setB){
//   return new Set([...setA].filter((el) => setB.has(el)))

// }
// let setA = new Set([1,2,3,4,5])
// let setB = new Set([1,2,6,8,9])

// console.log(setDiff(setA,setB));

// let map = new Map()

// let arr = [[1, 'Biswarup'],[2,'Arup'], [3,'Sandeep']]
// arr.map((el) => map.set(el[0],el[1]))

// console.log(map);


// let myMap = new Map([
//     [1,'Biswarup'],
//     [8,'Rahul'],
//     [3,'Raj']
// ])

// console.log(myMap.size)

// let myArr = [10,20,30,40]

// total = 0
// for(let i = 0; i< myArr.length; i++){
//     total += myArr[i]
// }

// console.log(`using loop- ${total}`);

// const myTotal = myArr.reduce(function (acc, carVal){
//     console.log(`acc= ${acc} , carVal = ${carVal}`);
//     return acc + carVal
// },0)

// console.log(`using reduce- ${myTotal} `);

let myCart = [
    {productName: 'shop',
      price: 100},

      {productName: 'biscuit',
      price: 40},

      {productName: 'cake',
      price: 80},

      {productName: 'cock',
      price: 70},
]

let myBill = myCart.reduce(function(acc,item){
    return acc + item.price

},0)

console.log(myBill);