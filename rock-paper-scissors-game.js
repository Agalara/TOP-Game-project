
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

function game (playerSelection, computerSelection){
    

}

function whoWins (playerSelection, computerSelection ){
    if(playerSelection===computerSelection){
        empate;
    }
    else if ((playerSelection==='rock')&&(computerSelection==='paper')){

    }


}

console.log("Hello World");
console.log(getComputerChoice());
