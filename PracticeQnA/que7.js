// IP- ['apple', 'banana', 'kiwi', 'orange']
//Op - {{fruit:apple, length:5},{fruit:banana, length:6}...}

//Using reduce

function fruits(arr){
    return arr.reduce((ans,cv)=>{
        ans[cv] = {fruit:cv,length:cv.length}
        return ans
        
    },{})
}

arr = ['apple', 'banana', 'kiwi', 'orange']
console.log(fruits(arr))

//Using map
function fruitsMap(arr){
    return arr.map((el) => ({fruit:el, length: el.length}))
}
console.log(fruitsMap(arr))