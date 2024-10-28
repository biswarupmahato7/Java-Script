//Ip [{Itel1: 'a', price:100}, {Itel2: 'b', price:200}, {Itel3: 'c', price:300}]
//OP- Total of Price

function calculatePrice(arr,prop){
    return arr.reduce((acc,cv)=>{
        
        return acc+=cv.price

    },0)
}

let arr = [{Item1: 'a', price:100}, {Item2: 'b', price:200}, {Item3: 'c', price:300}];
console.log(calculatePrice(arr,'price'))