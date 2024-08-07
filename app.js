let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();

    }
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerHTML= `Level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score:<b>${level}</b><br>Press any key to Start...`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250)
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}