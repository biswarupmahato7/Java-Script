//Ip - ['apple', 'bg', 'cd', 'abc', 'bm']
//Group by first letter

function groupBy(arr){
    return arr.reduce((acc,cv) =>{
        key = cv.charAt(0)
        if(!acc[key]){
            acc[key] = []
        }
        acc[key].push(cv)
        return acc
    },{})
}
let arr = ['apple', 'bg', 'cd', 'abc', 'bm']
console.log(groupBy(arr))