let num = "Biswarup"
let len = num.length;

let stack_Arr = new Array(len);
let top =-1;

function push(data){
    top++
    if(top>= len-1){
        console.log('Stack is Empty')
        return;
    }
    stack_Arr[top]=data;
    
}

function pop(){
    if(top<0) return false;
    let ele = stack_Arr[top];
    top--;
    return ele;
}

for(let char of num){
    push(char)
}

let ans ='';
while(top>=0){
    let el = pop()
    ans+=el
}
console.log(ans)