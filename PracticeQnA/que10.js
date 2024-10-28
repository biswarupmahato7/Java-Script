//Ip - [[1,2],3,[4,5],[6,7,[8,9]]]
//[1,2,3,4,5,6,7,8,9]

function singleArray(arr){
    let ans = []
    arr.forEach(element => {
        ans.push(...element) 
    });
    return ans;
}
let arr = [[1,2],[4,5],[6,7,]] // only can flat one level
console.log(singleArray(arr))

//Using flat
function singleArray2(arr){
    return arr.flat(Infinity);
}
let arr2 = [[1,2],3,[4,5],[6,7,[8,9]]] // 'Infinity' will flatten all nested levels
console.log(singleArray2(arr2))