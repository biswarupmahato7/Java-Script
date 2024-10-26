//Ip - [1,2,3,4,5]
//Op - [[1,2],[3,4],5] k=2

let arr = [1,2,3,4,5,6,7]
function divideArray(arr,k){
    let ans = [];
    for(let i=0;i<arr.length;i+=k){
        ans.push(arr.slice(i,i+k));

    }
    return ans;

}
console.log(divideArray(arr,3));
