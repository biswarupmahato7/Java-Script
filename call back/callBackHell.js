function one(val, callbackFunction1){
    setTimeout(()=>{
        const result = val +1;
        return callbackFunction1(result);
    },1000)
    
}

function two(val,callbackFunction2){
   const result2 = val + 2;
   return callbackFunction2(result2);
}

function three(val,callbackFunction3){
    const result3 = val + 3;
    return callbackFunction3(result3);
}

function All(){
    one(0,(result1)=>{
        two(result1,(result2)=>{
            three(result2,(result3)=>{
                console.log(result3)

            })

        })
    })

}
All()