let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const gamedraw=()=>{
    msg.innerText="Game was Draw!! Play again:)";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    console.log("Your choice=",userchoice);
        console.log("Computer choice=",compchoice);
    if (userwin==true) {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win:) Your ${userchoice}  Beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
        
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose :(  ${compchoice} Beats Your ${userchoice} `;
        msg.style.backgroundColor="red";
    }
    
};

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(compchoice===userchoice){
        console.log("Your choice=",userchoice);
        console.log("Computer choice=",compchoice);
        console.log("Game is Draw  :( ");
        gamedraw();
    }
    else{
        let userwin= true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors"?false:true;

        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})