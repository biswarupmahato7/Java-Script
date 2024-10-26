//second largest 
function secondLargest(arr){
    let first = -Infinity;
    let second = -Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] < first){
            second = arr[i];
        }
    }
    return second === -Infinity ? null : second

}

let arr = [5,1,3,6,7,9]
console.log(secondLargest(arr))