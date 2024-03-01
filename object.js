let obj={id:101,name:"biswarup",salary:1000};
console.log(obj);
      //OR
let obj1=new Object();
obj1.id=102;
obj1.name="Ronaldo";
obj1.salary=1000000;
console.log(obj1);
//OR

function abc(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
let c=new abc(103,"Amit",2002);
console.log(c);

//fetch data

console.log(c.id);
console.log(c.name);

//assigned 
c.address='purulia';
console.log(c);

c.id=104; //update

delete c.address; //delete
console.log(c);

