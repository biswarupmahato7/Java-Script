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

// let myCart = [
//     {productName: 'shop',
//       price: 100},

//       {productName: 'biscuit',
//       price: 40},

//       {productName: 'cake',
//       price: 80},

//       {productName: 'cock',
//       price: 70},
// ]

// let myBill = myCart.reduce(function(acc,item){
//     return acc + item.price

// },0)

// console.log(myBill);
// x=5
// console.log(x);
// let x
// console.log(x);

// let bul  = false
// console.log(typeof bul);

// let num = String(bul);
// console.log(num);
// console.log(typeof num);

// let str = ""
// let num = Boolean(str)
// console.log(num);
// console.log(typeof num)

// let num = -10

// let bul = Boolean(num)
// console.log(bul);

// let str = "anb123"

// let num = Number(str)
// console.log(typeof num);
// console.log(num);

// console.log(1+2+"3");
// console.log("1"+2 +2);

// let bigNum =1233n
// console.log(typeof bigNum);

// let roll = 12

// let newRoll = roll

// newRoll = 13
// console.log(roll);
// console.log(newRoll);

// let myDetails = {
//     name : "Biswarup",
//     age: 21,
// }

// let myUpdate = myDetails

// myUpdate.name = "Biswarup Mahato"

// console.log(myDetails.name);
// console.log(myUpdate.name);

// let url = "https://biswarup%20.com"

// url = url.replace('%20', '-')
// console.log(url);

// let name = "Biswarup Mahato"
// console.log(name);
// console.log(name.slice(0,8));

// let name = 'biswarup-mahato-cr7'
// console.log(name.split('-'));

// let num = 100
// console.log(typeof num);

// let num2 = new Number(140)
// console.log(num2);

// console.log((Math.random() * 10)  + 1);

// let min1 = 10
// let max1 = 20

// console.log(Math.floor(Math.random() * (max1 - min1) + min));

// let min = 11
// let max = 15

// console.log(Math.floor(Math.random() * (max - min) + min));

// console.log(Math.random());

// let myArr = [1,2,3,4,5]
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(3));

// console.log(myArr.join()); // return a String type

// let myArray = [1,2,3,4,5,6,7]
// let newAre1 = myArray.slice(1,3)
// console.log('Slice- ', newAre1);
// console.log("Original Array " , myArray);

// let newAre2 = myArray.splice(1,3)
// console.log('Splice- ', newAre2);
// console.log("Original Array ", myArray);

// let originalArray = [1, 2, 3, 4, 5];
// originalArray.splice(1, 2); // Remove 2 elements starting from index 1
// console.log(originalArray); // Output: [1, 4, 5]

// let batsman = ['Rohit', 'Virat', 'Hardik']
// let bolers = ["Bhumrah", 'Akshdeep', 'Ashwin']
// // batsman.push(bolers)

// let team = batsman.concat(bolers)
// console.log(team);
// let team2 = [...batsman, ...bolers]
// console.log(team2);

// console.log(Array.isArray("Biswarup"));

// console.log(Array.from('Biswarup'));

// let score1 = 20
// let score2 = 25
// let score3= 54

// console.log(Array.of(score1,score2,score3));

// let sym = Symbol("key1")

// let myObj = {
//     [sym] : "key2"
// }

// console.log(myObj[sym]);

// let jsUser = {
//     name: "Biswarup",
//     age: 23,
//     roll: 45,

// }

// jsUser.greetings = function(){
//     console.log(`Hello  ${this.name}`);
// }

// console.log(jsUser.greetings());

// const user  = new Object()
// const user2 = {}
// console.log(user);
// console.log(user2);

// let num = 0;

// console.log(num++);
// console.log(++num);
// console.log(num);

// let arr = [10,11,12,13,14,15,16,17,18]

// let filtered = arr.filter(n => n%2 === 0 )
// console.log(`Even- ${filtered}`);

// let filtered1 = arr.filter(n => n%2 != 0 )
// console.log(`Odd - ${filtered1}`);

// let mySym  = Symbol("Key1")

// let myObj = {
//     name: 'Biswarup',
//     age: '22',
//     email: 'biswarupmahato731@gmail.com',
//     [mySym]: "Key2"

// }

// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj[mySym])
// console.log(myObj);

// let arr = [1,2,3,4]
// let arr2 = [5,6,7]

// console.log(arr.concat(arr2));

// let obj1 = {1:'a',2:'b',3:'c'}
// let obj2 = {4:'d',5:'e',6:'f'}

// let obj3 = {...obj1,...obj2}
// let obj4 = Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj4);

// let user = {
//     firstName:"Biswarup",
//     lastName: "Mahato",
//     age: "23",
//     email: "biswarupmahato731@gmail.com"
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let collage = {
//     name: "Haldia Institute Of Technology",
//     sortName: "HIT",
//     address: "Haldia",
//     pin: "725201"

// }

// const {sortName : sn} = collage // we can set a name also
// console.log(sn);
// let user = {
//     name :"Biswarup",
//     age: "21"
// }

// function example(user){
//     console.log(`Name is ${user.name} and age is ${user.age}`);
// }

// example(user);

// let array = [1,2,3,4]
// function myfun(getArr){
//     return getArr[1]
// }

// console.log(myfun(array));

// let obj = {
//     name:"Biswarup",
//     age: "21"
// }

// console.log(Object.keys(obj));

// function sawp(a,b){
//     let c = a
//     a = b
//     b = c
//     console.log(`a= ${a}, b= ${b}`);
// }
// sawp(5,7)

// function add (a,b){
// return(a + b);
// }

// let result = add(4,5)
// console.log("Result is "+ result);

// let add = (a,b) =>{
//     return a+b

// }

// console.log(add(6,1))

// (function db () {
//     console.log("Db connected");

// })();

// ( (name)=>{
//     console.log(`myy name is ${name}`);
// })('Biswarup Mahato')

// let name = "Biswarup"

// let l = 0;
// for (const er of name){
//     console.log(er);
// }

// let map = new Map()
// map.set('IN', "INDIA")
// map.set('PAK', 'PAKISTAN')
// map.set('JAP', 'JAPAN')

// console.log(map);

// let arr = [1,2,3,4,5]
// for (const key in arr) {
//   console.log(arr[key]);
// }

// let obj = {
//     1: "One",
//     2: "Two",
//     3: "Three"
// }

// for (const [key] in obj) {
//    console.log(obj[key]);
// }

// let arr2 = [
//     {
//         js: "JavaScript",
//         fileName: "js"
//     },

//     {
//         java: "Java",
//         fileName: "java"
//     },

//     {
//         py: "Python",
//         fileName: "py"
//     },
// ]

// arr2.forEach(element => {
//     console.log(element.fileName);

// });

// let map = new Map()
// map.set( 'IN',"iNDIA")
// map.set( 'USA',"United State of America")
// map.set( 'CAN',"CAnada")

// for (const [key, value] of map) {
//     console.log(key, ':- ', value);

// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let Newnums = arr.filter( (nums) => nums>4)
// console.log(Newnums);
// let arr2 = []
// arr.forEach(element => {
//     if(element>4){
//         arr2.push(element)

//     }

// });
// console.log(arr2);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter((bk)=> {
//     return bk.publish>1982
//     })
//   console.log(userBooks);

// let userBook = books.filter((bk) => bk.genre === 'History')
// console.log(userBook);

// let arr = [1,2,3,5,4]

// let ans = arr.map((num) => num+10)
// console.log(ans);

// let shoppingCart = [
//     {
//         item: "Shoes",
//         price: 1045
//     },
//     {
//         item: "Shirt",
//         price: 2045
//     },

//     {
//         item: "Jeans",
//         price: 2999
//     },
//     {
//         item: "Glass",
//         price: 999
//     },
// ]

// let Total = shoppingCart.reduce((acc, item)=>{
//     return acc + item.price
// },0)

// console.log(`Total is : ${Total}`);

// console.log(a);
// var a =3;
// console.log(a);

//Function
// greeting();
// function greeting(){

//     console.log("Hello Function");

// }

// Function Expression

// let greeting = () =>{
//     console.log("Hello Arrow");

// }
// greeting()

// let name = "Biswarup Mahato"
// console.log(name);
// console.log( typeof(name));

// let name2 = new String("Ronaldo")
// console.log(name2);
// console.log(typeof(name2));

// let name = new String('Biswarup');
// let name2 = new String("Biswarup");

// console.log(name === name2);

// let arr = [1,2,3,4,5,6]
// console.log(`Slice-`+ arr.slice(1,3));
// console.log("Original Array - ", arr);

// console.log(`Splice- `+ arr.splice(1,3));
// console.log(`Original array - `,arr);

// function reverseString(str) {
//     let n = str.length;
//     let str2 = ""

//     for(i = n-1; i>=0; i--){
//         str2 += str.charAt(i);
//     }

//     console.log(str2);

// }
// let str = "bis"
// reverseString(str)

// function isPalindrome(str) {

//     let str2 = str.split('').reverse().join('')

//     if(str === str2) return true;
//     return false;
// }
// let str = "racecar"
// console.log(isPalindrome(str));

// const fruit = ['Apple', 'Mango', 'Banana']
// fruit[0] = "kwei" // we can Update the value
// console.log(fruit)

//fruit = [1,2,3] // But we can't reassign the value

//  const fullName = {
//     firstName : "Biswarup",
//     lastName :  "Mahato"
//  }

//  console.log(fullName);

//  fullName.firstName = "Biswa"
//  console.log(fullName);

//  let roll = 12
// let newRoll = roll
// newRoll = 13
// console.log(roll);
// console.log(newRoll);

// let myDetails = {
//     name: "Biswarup",
//     age: 22
// }

// let myUpdate = myDetails
// myUpdate.name = "Biswarup Mahato"

// console.log(myDetails.name);
// console.log(myUpdate.name);

// function print(){
//  var a = 87

// }
// console.log(a);

// function add(a,b){
//     return a + b
// }
// let arr = [2,4]
// // console.log(add(...arr));

// arr = [1,2,4,5]

// obj = {...arr}
// console.log(obj);

// function shoppingCart(...items){
//      let total = 0;
//      for (const element of items) {
//          total += element;
//      }
//      return total;
// }

// console.log(shoppingCart(10,20,30));

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let arr3= [...arr1, ...arr2]
// console.log(arr3);

// let obj1 = {
//     Name: 'Ronaldo',
//     Age: 39
// }

// let obj2 = {
//     name: 'Biswarup',
//     age: 23
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);
// ab()
// function ab(){
//     console.log("hel");

// }

// let name = "Biwarup"

// let updateName = name
// updateName = "Biswarup Mahato"
// console.log(name);
// console.log(updateName);

// let user = {
//     name: "Biswarup",
//     agr : 22
// }

// let updateUser = user;

//  updateUser.name = "Biswarup Mahato"

// console.log(user);
// console.log(updateUser);

//First class function

// function a() {
//     console.log("Hi iam A");

// }

// function b(a){
//     a();

// }

// b(a);

// (function a(){
//     console.log("Hello");

// })();

// function siuu(){
//     console.log(a);

// }
// let a = 3;

// siuu();

//A function along with its lexical environment is called as Closer

// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);

//     }
//     y();
// }
// x();

// const arr = []
// arr[1] = 6
// console.log(arr);

// const arr = [24]
// console.log(arr);

// const arr2 = new  Array(23)
// console.log(arr2);

// const arra  = [1,2,3]
// console.log(arra.length);

// const a = [1,2,3,4]

// a.splice(1,2)
// console.log(a);
// const newArr = a.toSpliced(1,2)
// console.log(newArr)

// const newA = a.slice(1,2)
// console.log(newA);

// const arr1 = ["abc", "xyz", "pqr"]
// arr1.sort();
// console.log(arr1);

// const arr = [43,122,98]
// arr.sort()
// console.log(arr);

// arr2 = [12 ,4 ,5 ,33]

// arr2.sort(function(a,b) {return a-b})  //if result is negative then keep a before b 12 - 4 = 8, if result is positive then swap a & b
// console.log(arr2);

// console.log(sum);

// let sum = function(a,b){
//     return a+b;
// }

// function abc(){
//     console.log(aa);

//     if(true){
//         var aa = 1;
//     }
// }
// abc();

// function abc(){ // call back function because its pass as a parameter
//     console.log('Hi i am a function')
// }

// function xyz(abc){ // HOF because it takes another function as a parameters
//     abc();

// }

// xyz(abc);

// Map is a higher order function , Which is use to transform contents of an array
// its return a  new array, not modify the original array

// const arr = [1,2,3,4];

// function square(x){
//     return x*x;
// }

// const sqrArray =  arr.map(square)
// console.log(sqrArray)

// //or

// const cube = arr.map(function cb(x){
//     return x*x*x
// })

// console.log(cube);

// // or use Arrow function

// const anotherArr = arr.map((x) => x+5);
// console.log(anotherArr)

// function abc(){ // call back function because its pass as a parameter
//     console.log('Hi i am a function')
// }

// function xyz(abc){ //parameters
//     abc();

// }

// xyz(abc); // argument

//Filter is a HOF , it's not modify original  array

// let arr = [2,7,6,3,12,56,9]

// const evenArr = arr.filter(el => el % 2 === 0)
// console.log(evenArr);

// function odd(el){
//     return el % 2 !=0;
// }

// const oddArray = arr.filter(odd)
// console.log(oddArray);

// const cart = [1,2,3,4,5]

// const sum = cart.reduce((acc,current)=>{
//     acc += current;
//     return acc
// },0)
// console.log(sum);

// const max = cart.reduce((acc,current)=>{
//     if(current>acc) acc = current
//     return acc
// },0)

// console.log(max);

// console.log(a);
// let a = 10;

// function fun (){
//     console.log(a)
//     if(true){
//         var a = 1;
//         let b=1

//     }
//     console.log(a);
//     console.log(b);

// }
// fun();

// class Book {
//     // Write your code here
//     constructor(title,author,year){
//         this.title = title;
//         this.author = author;
//         this.year = year

//     }

//     get summery(){
//         return `${this.title} by ${this.author} in ${this.year}`
//     }
// }

// const book1 = new Book("book1","Biswarup",2003);
// const book2 = new Book("book2","Rohit",2012);

// console.log(book1.summery)
// console.log(book2.summery

// class Customer {
//     constructor(name,age,gender,type){

//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.type = type;

//     }

//    displayUser(){
//     return `${this.name}, ${this.age}, ${this.gender}, ${this.type}`
//    }
// }

// class CustomerPremium extends Customer {
//     constructor(name,age,gender,type,feature){
//         super(name,age,gender,type) // SUPER-- To invoke parent class constructor
//         this.feature = feature;
//     }

//     displayUser(){
//         return `${this.name}, ${this.age}, ${this.gender}, ${this.type} ${this.feature}`
//        }
// }

// const c1 = new Customer('Biswarup',23,'Male','Normal')

// const c2 = new CustomerPremium('Biswarup',23,'Male','Premium','Movie')

// console.log(c1.displayUser());
// console.log(c2.displayUser());
// "use strict"

// function abc(){
//     console.log("abc");
//     console.log(this) // Global object

// }
// abc()

// //IN FUNCTION this keyword points to GLOBAL Object

// //IN strict mode this keyword points Undefined
// //In Browser this keyword points Window Object

// const obj = {
//     a:10,
//     b:function(){
//         console.log(this);

//     }
// }

// obj.b()
//OP-- { a: 10, b: [Function: b] }
//THIS KEYWORD INSIDE A OBJECT POINTS POINTS TO THE THE FUNCTION ITSELF

// let arr = [23,12 ,11,7,23]
// arr.sort();
// console.log(arr);

// function diameter(radius)
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         let ans=radius[i]*2;
//         output.push(ans);
//     }
//     return output;
// }
// function permeter(radius)
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         let ans=2*Math.PI*radius[i];
//         output.push(ans);
//     }
//     return output;
// }
// function area(radius)
// {
// console.log(permeter(radius));
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         let ans=Math.PI*radius[i]*radius[i];
//         output.push(ans);
//     }
//     return output;
// }

// let radius=[1,4,7,3];
// console.log(area(radius));
// console.log(diameter(radius));

// const area=function(radius)
// {
//     return Math.PI*radius*radius;
// }

// const diameter=function(radius)
// {
//     return radius*2;
// }

// const perimeter=function(radius)
// {
//     return 2*Math.PI*radius;
// }

// const master=function(radius_arr,logic)
// {
//     let output=[];
//     for(let i=0;i<radius_arr.length;i++)
//     {
//         let ans=logic(radius_arr[i]);
//         output.push(ans);
//     }
//     return output;
// }

// let radius=[2,4,6,8];
// console.log(master(radius,area));
// console.log(master(radius,diameter));
// console.log(master(radius,perimeter));

// let arr = [1,2,3,45,32,];

// let ans = arr.filter(el => el>18)
// .map(el => el +10)

//Que-1
// console.log(a);

//Que-2
// console.log(a)
// var a = 10;
// console.log(a)

// Que -3
// console.log(a);
// var a = 12;

//Que- 4
// console.log(a);
// const a = 23;

//Que- 5
// a = 10;
// console.log(a);
// let a;

//Que - 6
// console.log(a);
// a=10;

//Que- 7
// console.log(sum);

// var sum = function(a,b){
//     return a+b;
// }

// console.log(sum(3,4));

//Que- 8
// console.log(sum);

// let sum = function(a,b){
//     return a+b;
// }

//Que-9
// function abc(){

//     if(true){
//         var a =10;
//         let b = 12;
//     }
//     console.log(a); //10
//     console.log(b);

// }
// abc();

//Que- 10

// function abc(){
//     console.log(a);
//     if(true){
//         var a =10;
//         let b = 12;
//         console.log(b);
//     }
//     console.log(a);
//     console.log(b);

// }
//  abc();

// function info(game,player){
//     console.log(`My Name is ${this.firstName} ${this.lastName} & My age is ${this.age},favorite game is ${game}& favorite player ${player}`);

// }

// user1 = {
//     firstName: "Biswarup",
//     lastName: "Mahato",
//     age:23
// }

// user2 = {
//     firstName: "Sourav",
//     lastName: "Mahato",
//     age:23
// }

// // info.call(user1,"football","Ronaldo");
// // info.call(user2,"cricket","Virat");

// // Apply
// info.apply(user1,["Football", "Ronaldo"]);
// //Bind - its  return a function
// let fun = info.bind(user1,"Football", "Ronaldo");
// console.log(fun)
// fun();

// function createGreeting(firstName, lastName) {
//     // Define person object with firstName and lastName properties
//     person={
//         firstName:firstName,
//         lastName: lastName
//     }

//     // Define greet function within createGreeting
//     function greet(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }

//     // Use call to invoke greet with person context (callGreet)
//     const callGreet = greet.call(person)
//     const applyGreet = greet.apply(person)
//     const bindGreet = greet.bind(person)

//     // Use apply to invoke greet with person context and array of arguments (applyGreet)

//     // Use bind to create a bound function and assign it to bindGreet

//     //callGreet();
//     //applyGreet();
//     bindGreet();
// }

// createGreeting("John", "Doe");

// const obj  ={
//     a:10,
//     b : ()=>{
//         console.log(this);

//     },
//     c: function(){
//         console.log(this);

//     }
// }
// console.log(obj.b());
// console.log(obj.c());

// function abc(){
//     console.log("abc");
//     console.log(this) // Global object

// }
// abc()

// let a = ()=>{
//     console.log(this);

// }
// a()

// const obj  ={
//     a:10,

//     b: function(){
//         c = ()=>{
//             console.log(this);

//         }
//         c();

//     }

// }
// obj.b();

// function createCounter() {
//     // Define counterObj with count property
//     counterObj = {
//         count: 0
//     }

//     // Define increment arrow function within createCounter
//     counterObj.increment = ()=>{
//         counterObj.count++;
//         console.log(this.count);

//     }

//     // Return the increment function
//     return counterObj;
// }
//    const counter = createCounter();
//    counter.increment(); //1
//    counter.increment();
// let arr = [1,2,3,[4,5,6]]
// let arr2 = [...arr]
// console.log(arr2);

// let arr = [1,2,3,4,5,6]
// arr2 = arr.map((el) => el * el)
// console.log(arr2);

// let arr = [1 , 2,5]
// let a = arr.reduce((acc,cv) =>{
//     acc.push(cv * 2)
//     return acc;
// },[])

// console.log(a)

// let a = [23, 12, 15 ,67,18 ,36]

//Every JS Object have a spacial property attached called as Prototype
// let obj = {
//     firstName: "Biswarup",
//     lastName: "Mahato",
//     details: ()=>{
//         console.log(`My name is ${obj.firstName} ${obj.lastName}`);

//     }
// }
// console.log(Object.getPrototypeOf(obj));

// let parent = {
//     a:10,
//     b:20,
//     sum:function (){
//         console.log(this.a + this.b);

//     }
// }

// let child = {
//     x: 5,
//     y: 7,
//     mul: function(){
//         console.log(this.x * this.y);

//     }
// }
// child.__proto__ = parent // Now child can access all properties of parent

// Object.setPrototypeOf(child, parent);

// let arr = [2, 3 , 4,5,6]

// let arr 2 = arr.map(el => el *2).reduce((a,c)={ if(c>6){
//     a+=c;
// } },0)
// console.log(arr2);
// arr = [1.2,3,4,[3,4,5],[7,8,9]]
// arr2 = [].concat(...arr)
// console.log(arr2);
//----------------------------------------------------------------------------------

//Q-1 give the count ot each fruits

// let fruits = ["apple", "banana", "orange", "apple", "banana", "apple"];

// let fruitCount = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(fruitCount);

//Q-2 FIEND MAX

// let num = [3, 5, 7, 2, 8, 1];

// let max = num.reduce((acc, current) => {
//   return current > acc ? current : acc;
// }, num[0]);

// console.log(max);
// console.log(Math.max(...num));

//Que-3 second Largest

// let numbers = [3, 5, 7, 2, 8, 1];
// //

// let firstMax = Number.NEGATIVE_INFINITY;
// let secondMax = Number.NEGATIVE_INFINITY;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > firstMax) {
//     secondMax = firstMax;
//     firstMax = numbers[i];
//   } else if (numbers[i] > secondMax && numbers[i] !== firstMax) {
//     secondMax = numbers[i];
//   }
// }

// console.log(secondMax);

//Que - 4

// let fruits = ["apple", "banana", "orange", "apple", "banana", "apple", "abc"];
// let ans = fruits.filter((el) =>{
//     return el.endsWith('a')
// })
// console.log(ans);

//QUE -5 square every elements using reduce

// let arr = [2,3,4,5,6]
// let arr2 = arr.reduce((acc,cv) =>{
//     let sq = cv*cv;
//     acc.push(sq)
//     return acc
// },[])

// console.log(arr2);

// function square(arr){
//     return arr.map(el => el * el)
// }

// let arr = [2,3,4,5,6]
// console.log(square(arr));

// JS is Single Traded synchronies language
// console.log(`HI I am Number 1`);

// setTimeout(()=>{
//     console.log(`HI I am Number 2`);

// },2000)
// console.log(`HI I am Number 3`);

// console. log("Hello javascript");

// setTimeout (() => {
// console. log("Course from Internshala");
// }, 2000);

// fetch('https://dummyjson.com/posts')
// . then(res => res. json())
// .then(json => console.log(json))

// // millions of lines of code
// console. log("Learning Asynchronous Javascript");

// function createMessage(name,callbackFunction){

//     setTimeout(()=>{
//         const message = `Hello ${name}`
//         callbackFunction(message);

//     },1000)

// }

// function displayMessage(message){
//     console.log(message);
// }

//  createMessage('Biswarup' ,displayMessage)

// const promise = new Promise(function(resolve,reject){
//     let promiseResult;
//     setTimeout(()=>{
//         promiseResult = true;
//         if(promiseResult){
//             resolve('Successful')
//         }else{
//             reject('Its Rejected')
//         }
//     },1000)

// });

// //Consuming code

// promise.then((result)=> console.log(result))
// promise.catch((err)=>console.log(err))
// promise.finally(()=> console.log(promise))

// console.log(promise)
// //Other code
// console.log(`Hello bRO`);

// https://dummyjson.com/products/1
// https://dummyjson.com/users/1
// https://dummyjson.com/posts/1

// const firstObj = fetch("https://dummyjson.com/products/1").then((response) =>
//   response.json()
// );

// const secondObj = fetch("https://dummyjson.com/users/1").then((response) =>
//   response.json()
// );

// const thirdObj = fetch("https://dummyjson.com/posts/1").then((response) =>
//   response.json()
// );

// Promise.any([firstObj, secondObj, thirdObj])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(`Failed to fetch ${err}`));

// function fetchData1() {
//   // Return a Promise that resolves after 1 second
//   return new Promise(function(resolve,reject){
//       setTimeout(function() {
//           resolve(`Data from fetchData1`)
//           reject(`Error in Data1`)
//       }, 1000);
//   })
// }

// function fetchData2() {
//   // Return a Promise that resolves after 2 seconds
//   return new Promise(function(resolve,reject){
//       setTimeout(()=>{
//           resolve(`Data from fetchData2`)
//           reject(`Error in data2`)
//       },2000)
//   })
// }

// function fetchData3() {
//   // Return a Promise that resolves after 3 seconds
//     return new Promise(function(resolve,reject){
//       setTimeout(()=>{
//           resolve(`Data from fetchData3`)
//           reject(`Error in data2`)
//       },3000)
//   })
// }

// function fetchAllData() {
//   // Use Promise.all() to execute all fetchData functions concurrently
//   Promise.all([fetchData1(),fetchData2(),fetchData3()])
//   .then((responses) =>{
//       for(res of responses){
//           console.log(res)
//       }
//   })
//   .catch((err)=>console.log(`Error is - ${err}`))

// }

// fetchAllData();

// function fetchUserData(success) {
//   // Return a Promise
//   return new Promise(function(resolve,reject){
//       setTimeout(()=>{
//           if(success){
//             resolve({id:1, name: 'Biswarup Mahato'})
//           }else{
//             reject(`rejected`)
//           }
          
//       },2000)
//   })

//   // Simulate a network request with setTimeout

//   // Resolve or reject the Promise based on the success flag
// // }

// async function getUserData(success) {
//   // Try to call fetchUserData with await
//   try{
//        const response = await fetchUserData(success)
//        console.log(response)
      
//   }
//   catch(error){
//       console.log(error);
//   }
 
//   // Log the user data if successful

//   // Catch and log the error if the request fails
// }

// // Demonstrate successful request
// getUserData(true);

// // Demonstrate failed request
// getUserData(false);


// let nikhil={
//   name:"Himanshu",
//   age:20
// }


// // console.log(typeof(nikhil));
// // console.log(nikhil.name);
// console.log(nikhil["name"]);
// console.log(nikhil.age);
// nikhil.age=100;
// console.log(nikhil.age);



// let nikhil={
//   name:"Himanshu",
//   age:20,
//   address:{
//       city:"Delhi",
//       PinCode:110051
//   }
// }
// let copy=nikhil;

// copy.name="Richa";

// console.log(copy.name);
// console.log(nikhil.name);

// let copy={...nikhil};

// copy.name="Richa";

// copy.address.city="Jaipur";

// console.log(copy.address.city);
// console.log(nikhil.address.city);

// let copy=JSON.parse(
  
//   let copy=JSON.parse(JSON.stringify(nikhil));
//   copy.name="RICHA";
//   copy.address.city="Jaipur";
//   console.log(copy);
//   console.log(nikhil);


//   // ----------
  
// function flattenobj(obj,parent,res={})
// {
//     for(let key in obj)
//     {
//         let propName=parent?parent+'_'+key:key;
//         if(typeof(obj[key])=='object')
//             flattenobj(obj[key],propName,res);
//         else
//             res[propName]=obj[key];
//     }
// }

// let a  = [1,2,3]
// let b = new Array(1,34,5)

// console.log(typeof(a))
// console.log(typeof(b))

// let obj1 = {
//     name: "Biswarup",
//     age: 23,
//     address:{
//         city: "Delhi",
//         Pincode: 723201
//     },
//     gender: "male"
// }
// function flattenObject(obj,parent,res={}){
//     for(let key in obj){
//         let propName = parent? parent+'_'+key:key
        
//         if(typeof(obj[key] ) === 'object'){
//             flattenObject(obj[key],propName,res)
//         }else{
//             res[propName] = obj[key]
//         }
//     }
//     return res;

// }

// const FinalResult = flattenObject(obj1)
// console.log(FinalResult);

// let obj = {
//     name: 'Biswarup',
//     print: function(){
//         console.log(this.name);
//     }
// }

// const xyz = obj.print()
// console.log(xyz);

// let xyz = ()=>{
//     console.log(this);
    
// }
// xyz()

// function fn1(a,b){
//     console.log(a,b ,this);
    
// }

// let obj1 = {
//     name: 'Biswarup',
//     age: 23

// }


// let obj2 = {
//     name: 'Rohit',
//     age: 23

// }

// obj1.xyz = fn1
// // obj1.xyz(2,3);
// const ref = obj1.xyz;
// ref.call(obj2,10,20)

// let obj = {
//     fn: function(){
//         console.log('outer Function');
        
//         test = () =>{
//             console.log(this);
            
//         }
//         test()
//     }
// }
// let res = obj.fn()
// console.log(res);
// function cb(num){
//   return num/10;
    
// }

// Array.prototype.myMap = function myFun(cb){
//     let result = []
//     for(let i=0;i<this.length;i++){
//         let ans = cb(this[i])
//         result.push(ans)

//     }
//     return result;

// }

// let arr = [10,20,30,40,50]

// console.log(arr.myMap((el)=>el/10));

// Array.prototype.myFilter = function myFun(cb){
//     let result = []

//     for(let i=0; i<this.length;i++){
//         let ans = cb(this[i])
//         if(ans === true)
//         result.push(this[i]);
//     }
//     return result;

// }
// let arr2 = [12,11,23,40,5]

// console.log(arr2.myFilter((el) => el%2 === 0))

// Array.prototype.myReduce = function myFun(cb,initialVal){
//     let result = initialVal;
//     for(let i=0; i<this.length; i++){
//         result = cb(result,this[i])
//     }
//     return result;

// }
// let arr = [12,3,2,1]
// console.log(arr.myReduce((a,c) => a+=c,0));

// let arr = [
//     {name: 'Biswarup', dep: 'SDE', sal:5000},
//     {name: 'Rohit', dep: 'HR', sal:2000},
//     {name: 'Koushik', dep: 'SDE', sal:1000},
//     {name: 'Sonam', dep: 'HR', sal:1000},
//     {name: 'Rana', dep: 'CEO', sal:3000},
// ]

// function group(arr){
//     return arr.reduce((result,emp)=>{
//         if(result[emp.dep]){
//             result[emp.dep] += emp.sal
//         }else{
//             result[emp.dep] = emp.sal
//         }
//         return result;
//     },{})
// }
// console.log(group(arr));


// function group(arr){
//     return arr.reduce((result,emp) =>{
//         if(result[emp.dep]){
//             result[emp.dep] += emp.sal
//         }else{
//             result[emp.dep] = emp.sal
//         }
//         return result
//     },{})


// }
// console.log(group(arr))

// let arr = [1,2,3]
// let result = arr.concat(arr)
// console.log(result)
// let n = arr.length;

// for(let i=0;i<n;i++){
//     arr[n+i] = arr[i];
// }

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }

// let arr = [1,2,3,4,5]

// for(let i=1;i<arr.length;i++){
//     arr[i] = arr[i-1] + arr[i]
// }

// console.log(arr)

// function abc(){
//     console.log('Function');
//   }
//   abc();
  
//   setTimeout(() => {
//     console.log('Async');
//   }, 1000);
  
//   setInterval(() => {
//     console.log('inter');
//   }, 1000);
  
//   console.log('a');

// let num = 1;
// const table = setInterval(()=>{
//     console.log(`5 x ${num} = ${5 * num}`);
//     num++;
//     if(num >10){
//         clearInterval(table)
//     }


// },1000);

// function abc(num){
//     let xyz = setInterval(() =>{
//         console.log(num);
//         num--;
//     },1000)
//     setTimeout(()=>{
//         clearInterval(xyz)
//     },20000)
// }
// abc(50)

// function abc2(){
//     setTimeout(()=>{
//       console.log(a)
//     },2000)
// }
// abc2()

// for(var i=0; i<5;i++){
//     console.log('B');
//     setTimeout(()=>{
//         console.log(i)
//     })
// }

// for(let i=0; i<5;i++){
//     console.log('A');
//     setTimeout(()=>{
//         console.log(i)
//     })
// }

// let p = new Promise(function(resolve,reject){
//     let myMarks = 70;
//     let passMarks = 35;
//     if(myMarks>passMarks){
//         resolve('Congo! You pass');
//     }else{
//         reject('You fail')
//     }
// })

// p.then((data)=>{
//     console.log(data)
// })
// .catch((data)=>{
//     console.log(data)
//})




// function ticketBook(callback){
//     setTimeout(()=>{
//         let ticket = "🎫";
//         console.log('Your Ticket is Booked', ticket)
//         callback(ticket)

//     },1000)
// }

// function luggageSubmit(ticket,callback){
//     setTimeout(()=>{
//         let luggage = ticket+ "👜";
//         console.log('Your Luggage is Submitted');
//         callback(luggage)

//     },2000)
// }

// function tackOff(luggage,callback){
//     setTimeout(()=>{
//         let fly = "✈️"
//         console.log('Flight Take Off')
//         callback(fly);

//     },3000)

// }

// ticketBook((ticket) =>
// {
//     luggageSubmit(ticket,(luggage)=>
//     {
//         tackOff(luggage,(tackOff)=>{
//             console.log('Reached Destination')
//         })
//     })
// })



// function ticketBook(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let ticket = "🎫";
//              resolve(ticket)
           
//         },2000)

//     })
   
// }

// function luggageSubmit(ticket,callback){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let luggage = ticket+ "👜";
//              resolve(luggage)
        
//         },2000)
//     })

// }

// function tackOff(luggage,callback){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let fly = "✈️"
//             resolve(fly)
    
//         },2000)
//     })


// }

// ticketBook()
//             .then(function(data){
//                 console.log('Your ticket is Booked',data)
//                 return luggageSubmit(data)
//             })
//             .then(function(data){
//                 console.log('Luggage is submitted',data)
//                 return tackOff(data)
//             })
//             .then(function(data){
//                 console.log('Ready to Fly',data)
//             })
//             .then(function(){
//                 console.log('The Journey is over')
//             })
//             .catch(function(data){
//                 console.log(`Error Occurs`)
//             })

// function fetchData1(){
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             resolve('Data from Fetch1')
//         },1000)
//     })
// }

// function fetchData2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             reject('Error in fetch2')

//         },2000)
//     })
// }

// function fetchData3(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve('Data from fetch3')

//         },1500)
//     })
// }


// function fetchAllData(){
//     Promise.race([fetchData1(), fetchData2(),fetchData3()])
//     .then((data) =>{
//         console.log(data)
//     })
//     .catch((data) =>{
//         console.log('error in ',data)
//     })
// }

// fetchAllData()

// let arr = [1,2,3,4,5,6,7,8]

// function binarySearch(arr,target){
//     let st = 0;
//     let end = arr.length

//     while(st <= end){
//         let mid = Math.floor( st + (end-st)/2);
//         if(arr[mid] === target) return `Element Found in index ${mid} `
//         else if(arr[mid] < target){
//             st = mid+1;
//         }else{
//             end = mid -1;
//         }

//     }
//     return `${target} is not present in the array`
// }

// console.log(binarySearch(arr,3))

// let arr = [1,1,1,1,1,1]

// function countOne(arr){
//     let st =0;
//     let end = arr.length-1;

//     while(st <= end){
//         let mid = Math.floor(st + (end -st)/2)
        
//         if(arr[mid] === 0){
//             end = mid-1;
//         }
//         else if(arr[mid] === 1 && (mid + 1 < arr.length && arr[mid + 1] === 1)){
//             st = mid+1;

//         }else if(arr[mid] === 1 && ((arr[mid + 1] ===0) || mid ===arr.length-1)){
//             return `number of 1 is ${mid+1}`
//         }
//     }
//     return `No 1 is present`
// }

// console.log(countOne(arr));


// let arr = [2,8,4,6,7,1]

// function swap(arr,a,b){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;

// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let j = i;
//         while(j> 0 && arr[j] < arr[j-1]){
//             swap(arr,j,j-1)
//             j--;
//         }
//     }
//     return arr;
// }

// console.log(insertionSort(arr))

// let arr = [2,3,1,5,8,5]

// function swap(arr,a,b){
//     let temp = arr[a];
//     arr[a] = arr[b]
//     arr[b] = temp;
// }

// function insertionSort(arr){

//     for(let i=1; i<arr.length;i++){
//         let j = i;
//         let flag = false;
//         while(j>0 && arr[j] < arr[j-1]){
//             swap(arr,j,j-1)
//             j--;
//             flag = true;

//         }
//         if(flag == false )  break;
//     }
//     return arr;

// }

// console.log(insertionSort(arr))

// let arr = [2, 3, 1, 5, 8, 5];

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i;
//         let swapped = false;
//         while (j > 0 && arr[j] < arr[j - 1]) {
//             // Swap elements directly
//             let temp = arr[j];
//             arr[j] = arr[j - 1];
//             arr[j - 1] = temp;
//             j--;
//             swapped = true;
//         }
//         // If no swaps occurred, the array is sorted
//         if (!swapped) break;
//     }
//     return arr;
// }

// console.log(insertionSort(arr));

// let arr = [3,1,5,7,8,4]

// function inserTionSort(arr){
//     let key,j;
//     for(let i=1;i<arr.length;i++){
//         key = arr[i];
//         j = i-1;

//         while(j>=0 && key < arr[j]){

//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;

//     }
//     return arr;
// }

// console.log(inserTionSort(arr))

// let arr = [3,2,6,7,1]
// function insertionSort(arr){
//     let key,j;
//     for(let i=1;i<arr.length;i++){
//         key = arr[i];
//         j = i-1;
//         while(j>=0 && key< arr[j]){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     return arr;
// }

// console.log(insertionSort(arr))

// function swap (arr,a,b){
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;

// }

// function bubbleSort(arr){
//     let n = arr.length;
//     let swapped  = false;
//     for(let i=0; i<n;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(arr[j] > arr[j+1]){
//                 swap(arr,j,j+1);
//                 swapped = true;
//             }
//         }
//         if(swapped === false) break;
//     }
//     return arr;

// }

// let arr = [8,1,5,4,3];
// console.log(bubbleSort(arr))


// let a=5;
// let b=7;

// let temp = a;
// a = b
// b = temp;
// console.log(a)
// console.log(b)

// let a = 5;
// let b = 7;

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a)
// console.log(b)

//Custom Map///

function cb(el){
    return el * el;

}

function customMap(arr,cb){
    let result =[];
    for(let i=0;i<arr.length;i++){
        let op = cb(arr[i]);
        result.push(op)
    }
    return result;
    
}
console.log(customMap([1,2,3,4,5],cb))

//custom filter

// function cb(el){
//     if(el % 2 ===0){
//         return el;
//     }
// }

// function customFilter(arr,cb){
//     let result = [];
//     for(let i=0; i<arr.length;i++){
//         if(cb(arr[i])){

//            result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(customFilter([2,3,4,5,6],cb))

//custom reduce
// function cb(acc,el){
//     return acc+el;
// }

// function customReduce(arr,cb,initialVal){
//     let acc = initialVal;
//     for(let i=0; i<arr.length;i++){
//         acc = cb(acc,arr[i])

//     }
//     return acc;

// }

// console.log(customReduce([1,2,3,4,5],cb,0));
