// With try catch block 

try{
    let x = undefined;  //try is completely executed if no Unexpected error occurs in Try block
    console.log(x[0]);
} catch (error){ //(error) we can pass a argument that can show the Error Through by Try Block
    console.log("Error handling in catch", error) // catch is Executed when Try block is not completely Executed 

}finally{
    console.log("Finally always get Executed"); // finally is Always Executed 
}

