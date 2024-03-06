console.log(Math.PI);  // can we change it ?

const dis = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(dis);

// we can set  our Object PropertyDescriptor

let chai ={
    name:'Masala Chai',
    price: 100,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai,'name'));
