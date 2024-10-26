function createMessage(name,callbackFunction){
    
    setTimeout(()=>{
        const message = `Hello ${name}`
        callbackFunction(message);

    },1000)
    
}

function displayMessage(message){
    console.log(message);
    
}

 createMessage('Biswarup',displayMessage)

