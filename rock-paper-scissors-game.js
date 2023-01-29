
function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function getComputerChoice (){
    let option= getRandomIntInclusive(1,3);
    console.log(option);
    switch(option){
        case 1:
            let computerChoice="rock"
            console.log("1");
            break;
        case 2:
            let computerChoice="paper"
            console.log("2");
            break;
        case 3:
            let computerChoice="scissors"
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
