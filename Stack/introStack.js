let stack_arr = new Array(6);
let top = -1;
let length = stack_arr.length;

//Push
function push(data){
  top++;
  if(top>length-1){
    console.log('Stack is already full');
    top--;
    return;
  }
  stack_arr[top] = data;

}
//Pop
function pop(){
  if(top<0){
    console.log('Stack is Empty')
  }else{
    let popedElement = stack_arr[top];
    stack_arr[top] = undefined;
    top--;
    return popedElement
  }
}
//Fiend top
function findTop(){
    if(top<0){
        console.log('Empty stack')
        return false;
    }else{
        return stack_arr[top];
    }
}

//Empty or not
function isEmpty(){
    if(top<0){
        console.log('Stack is Empty')
        return true;
    }
    return false;

}
// Full or not

function isFull(){
    if(top === length -1){
        console.log('STACK is Full')
        return true;
    }
    return false;
}


push(10)
push(20)
push(30)
push(40)
push(50)
push(60)
push(70)




function print(){
  for(let i=top;i>=0;i--){
    console.log(stack_arr[i])
  }
  
}

print()
console.log(isFull())
console.log(findTop())