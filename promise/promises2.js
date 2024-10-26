const promise = new Promise(function(resolve,reject){
    let promiseResult;
    setTimeout(()=>{
        promiseResult = true;
        if(promiseResult){
            resolve('Successful')
        }else{
            reject('Its Rejected')
        }
    },1000)


});

//Consuming code

promise.then((result)=> console.log(result))
promise.catch((err)=>console.log(err))
promise.finally(()=> console.log(promise))

console.log(promise)
//Other code
console.log(`Hello bRO`);