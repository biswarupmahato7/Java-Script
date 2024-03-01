let oneSet = new Set()

let myArray = [1,2,3,4,5,6,7,6]
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(9)
console.log(newSet.has(7))

//SET DIFFERENCE

function setDiff(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)))

}

let setA = new Set([1,2,3,4])
let setB = new Set([1,2,8,9])
console.log(setDiff(setA,setB));

// MAP

let map = new Map()

let arr = [[1,"Biswarup"],
[2,"Bipul"],
[3,"Rahul"],
[4,"Pryanshu"],
[5,"Ranjeet"]]

arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))

console.log(map.get(4));