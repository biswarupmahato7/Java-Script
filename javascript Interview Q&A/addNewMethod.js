//Q-Add new method "averageOfNumbers" to array and get the average of the elements in an array

Array.prototype.AvgOfNumber = function(){
    
    let sum = 0;
    for(let i=0; i<this.length; i++){
        
        if(!Number.isFinite(this[i])){
            console.log('all element must be Finite');
            return

        }else{
               sum += this[i]
                               
            }
    } 
    return sum/ this.length
}

let myArray = [1,2,3,4,5,10]
const average = myArray.AvgOfNumber()
console.log(`avg is ${average.toFixed(2)}`)