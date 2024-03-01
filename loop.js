
// for(let i = 0; i<=10; i++){
//     const elements = i
//     console.log(elements);
// }

// for(let i = 0; i<=10; i++){
//    if(i == 5){
//     console.log(`5 is Detected`)
//     continue
//    }
//    console.log(i);
// }

// let index = 0;
// while(index <= 10){
//    console.log(`index is: ${index}`)
//    index+= 2
// }

// let myHeros = ['Ronaldo', 'Rohit', 'King18']
// let h =0;
// while(h < myHeros.length){
//    console.log(`(My Heros Are: ${myHeros[h]}`)
//    h++
// }

// let score = 0

// do{
//    console.log(`My Score is- ${score}`);
//    score+= 3
// }while(score <=15)

// const arr = [1,2,3,4,5,6,7]

// for(const idx of arr){
//    console.log(`arr is ${idx}`);
// }

// let myName = 'Biswarup Mahato'

// for(const l of myName){
//    console.log(l);
// }

// let map = new Map()

// map.set('cr7','Cristiano Ronaldo')
// map.set('rs','Rohot Sharma')
// map.set('vk','Virat Kohali')
// map.set('ck','Virat Kohali')
// map.set('cr8','Cristiano Ronaldo')

// console.log(map);

// let obj ={
//    'cr7': 'Cristiano Ronaldo',
//    'rs': 'Rohot Sharma',
//    'vk': 'Virat Kohali',
//    'ck': 'Virat Kohali',
//    'cr8': 'Cristiano Ronaldo'
// }

// for (const key in obj) {
//  console.log(`${key} for: ${obj[key]}`);

// }

//FOR eACH

// let coading = ['js', 'java', 'python', 'mongo']

// coading.forEach( function(items) {
//    console.log(items);
// })

// coading.forEach( (items)=>{
//    console.log(items);
  
// })


// let myCoading = [

//    {
//       languageName : 'Java',
//       shortName : 'java'
//    },

//    {
//       languageName : 'Python',
//       shortName : 'Py'
//    },

//    {
//       languageName : 'Javascript',
//       shortName : 'js'
//    }
// ]

// myCoading.forEach( (items)=>{
//    console.log(items.languageName);

// })

// let myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num)=> num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num)=>{
//    return num > 4
// }) 

// console.log(newNums);


const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

 let userBooks = books.filter( (book) => book.genre === 'History')
 console.log(userBooks);