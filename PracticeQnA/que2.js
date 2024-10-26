// fiend common elements in 2 array
let arr1 = [1,2,7,4]
let arr2 = [2,4,5,6,7]

let ans  = arr1.filter((el)=> arr2.includes(el))
console.log(ans);
