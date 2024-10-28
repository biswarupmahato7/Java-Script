//Group By age [{name:Alice, age:25},
//             {name:'Bob',age:30}, {name:'Mac',age:30},]

//Op {25: {name:Alice, age:25},
//    30: {name:'Bob',age:30}, {name:'Mac',age:30}

function groupBy(arr,prop){
    return arr.reduce((acc,cv)=>{
        const key = cv[prop]
        if(!acc[key]){
            acc[key]  = []
        }
        acc[key].push(cv)
        return acc;
    },{})
}

let arr = [{name:'Alice', age:25},  {name:'Bob',age:30}, {name:'Mac',age:30},]
console.log(groupBy(arr,'age'))