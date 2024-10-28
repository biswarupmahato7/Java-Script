//Ip - arr[1,2,3,4]
//Op - [[1,1],[2,4],[3,9],[4,16]]


//Using Normal loop
let arr = [1,2,3,4]
function squareNum(arr){
    let ans = []
    for(let i=0;i<arr.length;i++){
        ans.push([arr[i],arr[i]*arr[i]])
       
    }
    return ans;

}
console.log(squareNum(arr))

// Using Map
function squareNumMap(arr){
    return arr.map(el => [el,el*el])
}

console.log(squareNumMap(arr))

//Using reduce

function squareNumReduce(arr){
    return arr.reduce((ans,cv)=>{
        ans.push([cv,cv*cv])
        return ans
    },[])
}
console.log(squareNumReduce(arr))