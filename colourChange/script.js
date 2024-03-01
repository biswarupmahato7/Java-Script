const btn = document.getElementById("button");

const randomColour = () => {
    let val="012345678ABCDEF";
    let cons = "#";
    for( let i=0;i<6; i++){
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

function changeRandomColor(){
    document.body.style.backgroundColor = randomColour();
}

btn.addEventListener("click",changeRandomColor);