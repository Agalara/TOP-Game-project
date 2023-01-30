
function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function getComputerChoice (){
    let option= getRandomIntInclusive(1,3);
    console.log(option);
    let computerChoice;
    switch(option){
        case 1:
            computerChoice="rock";
            console.log("1");
            break;
        case 2:
            computerChoice="paper";
            console.log("2");
            break;
        case 3:
            computerChoice="scissors";
            console.log("3");
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
        return `There is a draw! Both choose ${playerSelection}.`;
    }
    else {
        if(playerWins){
            return `Congratulations, you won! ${playerSelection} beats ${computerSelection}.`;
        }
        else{
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }
}

function game(){

    console.log("Let's play some Rock, Paper, Scissors!");

    let score = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round number ${i+1}.`);
        let playerEntry = window.prompt(`What's your choice?`);
        let playerSelection = playerEntry.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound (playerSelection, computerSelection ));
     }

}
console.log(game());