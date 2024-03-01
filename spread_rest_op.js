
// SPREAD 
// const oneArray = [1, 2, 3]
// const twoArray = [4, 5, 6, 7]

// const threeArray = [...oneArray, ...twoArray]
// console.log(threeArray);

//REST

function manyArguments (...args){
    let finalArr = args.map(e =>e)
    console.log(finalArr)

}
manyArguments(1, 2, 3, 4)
manyArguments(4, 5, 6, 7)