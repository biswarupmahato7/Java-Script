//Q. Display the original properties of an array.
//A. Concept -> By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
//So, to get original properties just add a check to array elements using hasOwnProperty syntax

let myArray = [1,2,3,4,5]
Array.prototype.ExtraProperty = 'Biswarup'

for(let i in myArray){
    if(myArray.hasOwnProperty(i)){
        
        console.log(i);
    }
}