//return array of Function and when we call the function it should return the square of the element

function square(arr){
   return arr.map(el => ()=> el*el)
}

let outPut = square([1,2,4,5])
console.log(outPut);
console.log(outPut[1]())