let a = {}; // An empty object
let b = { name: 'Rahul' }; // Object with one property
let c = { name: 'Amit' }; // Another object with one property

a[b] = { name: 'Ankit' }; // Using `b` as a key; the key is converted to "[object Object]"
a[c] = { name: 'Rahul' }; // Using `c` as a key; this also becomes "[object Object]" and overwrites the previous value

console.log(a[b]); // Logs `{ name: 'Rahul' }`

// console.log(a[c])


// In JavaScript, when you use an object as a key in another object, the key is implicitly converted to a string representation. So, both b and c 
// are converted to the same string: "[object Object]". This causes a conflict in the keys, as they both evaluate to the same string, overwriting each other.