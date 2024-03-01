let emp={
    id:102,
    name:"BISWARUP",
    salary:100
};
//method to fetch key
let keys=Object.keys(emp);
//console.log(keys);

//method to fetch val
let value=Object.values(emp);
//console.log(value);

//both
let entries=Object.entries(emp);
// console.log(entries);
// Object.freeze // to stop update,delete and insert 
emp.name="AMIT";
//console.log(emp);
// Object.seal(emp) // Only  UPDATE , delete or Insert STOP

let o=Object.assign({},emp);
console.log(emp);
console.log(o);