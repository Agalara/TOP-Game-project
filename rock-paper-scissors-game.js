
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

function game(){

    console.log("Let's play some Rock, Paper, Scissors!");

    let score = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        let draw=false; //I let draw andor playerWins out of the loop. That caused that
        let playerWins=false;//after a draw, the following encounters where always a draw too
        console.log(`Round number ${i+1}.`);
        let playerEntry = window.prompt(`What's your choice?`);
        // console.log(playerEntry);
        let playerSelection = playerEntry.toLowerCase();
        let computerSelection = getComputerChoice();
        // console.log(computerSelection);
        let result=playRound (playerSelection, computerSelection );
        
        if(result==="draw"){
            draw=true;
        }
        else if (result==="playerWins"){
            playerWins=true;
        }
        else if (result==="playerLose"){
            playerWins=false;
        }

        if(draw){
            draws++
            console.log(`There is a draw! Both choose ${playerSelection}.`);
        
        }
        else {
             if(playerWins){
                score++;
                console.log(`Congratulations, you won! ${playerSelection} beats ${computerSelection}.`);
             }
             else{
                console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
             }
            }  
     
    }
    console.log(`Puntuacion final: Victorias = ${score} Empates = ${draws} Derrotas = ${5-score}`);
}
console.log(game());
const selection=document.querySelectorAll('.playerOpt');
selection.forEach()
window.addEventListener('click',)