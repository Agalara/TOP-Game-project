console.log("Hello World");

function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor( Math.random()*(max - min + 1) + min);
}

function getComputerChoice (){
    let option= getRandomIntInclusive(1,3);
    console.log(option);
    

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
