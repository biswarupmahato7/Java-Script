//IP- student = [{name:'amit',grade:80}, {name:'Sumit',grade:70},{name:'siu',grade:78},{name:'Ajit',grade:90}]
//OP - total of grade & avg 

function student(arr){
   let total = arr.reduce((acc,cv) => acc+= cv.grade ,0)
   let avg = total/arr.length
   return{total,avg}


}
let arr = [{name:'amit',grade:80}, {name:'Sumit',grade:70},{name:'siu',grade:78},{name:'Ajit',grade:90}]
console.log(student(arr))