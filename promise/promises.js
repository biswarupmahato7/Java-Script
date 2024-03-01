const promiseOne = new Promise(function(resolve,reject){
//DO any asyn Task, || Db calls | Network calls |

setTimeout(function(){
    console.log('DB call complete');
    resolve();

},1000)

})

promiseOne.then(function(){
    console.log('promise Resolved');
})
// --------------------------------------------------------------------

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('DB 2 call compleat');
        resolve()
    },1000)
}).then(function(){
    console.log(`promise 2 Resolved`);

})

// ----------------------------------------

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Biswarup", age: 23}) //We can pass value s here 

    },1000)

});

promiseThree.then(function(user){
    console.log(user);

})

// -------------------------------------------------------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({userName:'mahato Biswarup', address:'Purulia'})
        }else{
            reject('ERROR: Error Occurs ')
        }
    },1000)
})

promiseFour.
then((user) =>{
    console.log(user);
    return user.address
}).
then((myAddress) =>{  //we can do channing also
    console.log(myAddress);
}).
catch(function(error ){
    console.log(error);

}).
finally(()=>{
    console.log('The Promise is resolve or reject it execute');
})


// --------Async----------------------Same as Promise________

//  [if we use async we must have to use try-catch block , 
//   because when a  error occurs async can't directly handel it ]


const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:'Async', address:'Purulia'})
        }else{
            reject('ERROR: Error Occurs in Async ')
        }
    },1000)


})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()