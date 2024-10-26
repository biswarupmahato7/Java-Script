//count frequency 
let arr =  ['a', 'b', 'c', 'a', 'c', 'b', 'r', 'a'];

//using  object
function countFrequency(arr){
    let obj ={};
    for(let i=0; i<arr.length;i++){
        if(obj[arr[i]]){
            
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    return obj

}

console.log(countFrequency(arr))

// using reduce 

function countFreq2(arr){
    return arr.reduce((acc,cv) =>{
        acc[cv] = (acc[cv] || 0) +1
        return acc

    },{})
}

console.log(countFreq2(arr))