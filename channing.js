let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = nums.map((n)=> (n * 10))
.map((n) =>(n+1)).filter( (n) => (n > 50))

console.log(newNums);