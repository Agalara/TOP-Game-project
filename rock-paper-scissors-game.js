
function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function getComputerChoice (){
    let option= getRandomIntInclusive(1,3);
    // console.log(option);
    let computerChoice;
    switch(option){
        case 1:
            computerChoice="rock";
            // console.log("1");
            break;
        case 2:
            computerChoice="paper";
            // console.log("2");
            break;
        case 3:
            computerChoice="scissors";
            // console.log("3");
        
        // default:
    }
    console.log(computerChoice);
    return computerChoice;
}

function playRound (playerSelection, computerSelection ){
    
    let playerWins = false;
    let draw = false;

    if(playerSelection===computerSelection){
        draw = true;
    }
    else{
        switch(playerSelection){
            case "rock":
                if(computerSelection==="scissors"){
                        playerWins = true;
                }
                break;
    
            case "paper":
                if(computerSelection==="rock"){
                        playerWins = true;
                }
                break;
    
            case "scissors":
                if(computerSelection==="paper"){
                        playerWins = true;
                }
                break;
        }
    }
    if(draw){
        return "draw";
    }
    else {
        if(playerWins){
            return "playerWins";
         }
         else{
            return "playerLose";
         }
    }
}

// function resultTracker(result,win,draws,lose){
    
//     if(result==="draw"){
//         draws+=1;
//     }
//     else if (result==="playerWins"){
//         win+=1;
//     }
//     else{
//         lose+=1;
//     }
// return{win,draws,lose};
// }

function displayScore(win,draw,lose){

    if(win > 0){
        const victory=document.querySelector('.win');
        victory.textContent=`Victories: ${win}`;
    }

    if(draw > 0){
        const victory=document.querySelector('.draw');
        victory.textContent=`Draws: ${draw}`;
    }

    if(lose > 0){
        const victory=document.querySelector('.lose');
        victory.textContent=`Lose: ${lose}`;
    }

}

let result='';
let win=0;
let lose=0;
let draw=0;
const maxTrys=5;

const buttons=document.querySelectorAll('button');

 
    buttons.forEach((button) =>{
        button.addEventListener('click',() =>{  

        result=playRound(button.className,getComputerChoice());
        
        if(result==="draw"){
            draw+=1;
        }
        else if (result==="playerWins"){
            win+=1;
        }
        else if (result==="playerLose"){
            lose+=1;
        }

        // {win,draw,lose}=resultTracker(result);
        displayScore(win,draw,lose);
        
        });
    });

