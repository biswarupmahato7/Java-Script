//Ip - [[1,2], [2,3], [4,5],[3,3]]
//op- [2,6,20,9]

function mulArray(arr){
    return arr.map(el => el[0]*el[1])
}

console.log(mulArray([[1,2], [2,3], [4,5],[3,3]]));
