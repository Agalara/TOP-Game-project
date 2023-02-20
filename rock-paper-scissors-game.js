
function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function getComputerChoice (){
    let option= getRandomIntInclusive(1,3);
    let computerChoice;

    switch(option){
        case 1:
            computerChoice="rock";
            
            break;
        case 2:
            computerChoice="paper";
           
            break;
        case 3:
            computerChoice="scissors";
        
        // default:
    }
    return computerChoice;
}

function updateScore(playerWins,isDraw){

    if(isDraw){
        draw+=1;
        result="draw";
    }
    else {
        if(playerWins){
            win+=1;
            result="playerWins";
         }
         else{
            lose+=1;
            result="playerLose";
         }
    }
}

function playRound (playerSelection, computerSelection ){
    
    let playerWins = false;
    let isDraw = false;

    if(playerSelection===computerSelection){
        isDraw=true;
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
    updateScore(playerWins,isDraw);
}

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

function endGame(){
   
    let endGameText='';
    clearScreen();
   
    if(win>lose){
        
        endGameText='You beat your CPU!';
    }
    else{
        
        endGameText='Your CPU won. Now Skynet is ONLINE. Thanks';
    }
    showWinner(endGameText);
}

function clearScreen(){

    const container= document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function showWinner(endGameText){
    
    const span=document.createElement('span');
    const container= document.querySelector('.container');
    container.appendChild(span);
    span.classList.add('endGameTextContainer');
    span.textContent=endGameText;
}

let result='';
let win=0;
let lose=0;
let draw=0;

const buttons=document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        
        playRound(button.className,getComputerChoice());
        displayScore(win,draw,lose);
        
        if(win == 5 || lose ==5){
            endGame();
        }
    });
});

// while(win<maxTrys || lose<maxTrys){

//     result=playRound(button.className,getComputerChoice());
        
//     if(result==="draw"){
//             draw+=1;
//     }
//     else if (result==="playerWins"){
//             win+=1;
//     }
//     else if (result==="playerLose"){
//             lose+=1;
//     }

//         // {win,draw,lose}=resultTracker(result);
//     displayScore(win,draw,lose);
// }   

// buttons.forEach((button) =>{
//     button.addEventListener('click',() =>{

//     });
// });