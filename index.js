console.log('Hi')
const options = ["rock","paper", "scissors"];


function getComputerChoice(){
    const choice = options[Math.floor(Math.random()* options.length)];
   
   return choice;
}

function checkWinner(PlayerSelection,computerSelection){
    if (PlayerSelection == computerSelection){
        return "Tie";
    }
    else if((PlayerSelection == "rock" && computerSelection == "scissors")|| 
    (PlayerSelection == "scissors" && computerSelection == "paper") ||
    (PlayerSelection == "paper" && computerSelection == "rock")){
        return "player";
    }else {
        return "computer";

    }
}

function playRound(PlayerSelection,computerSelection){
    const result = checkWinner(PlayerSelection, computerSelection);
    if (result == "Tie"){
        return"Its a tie";
    }
    else if(result=="player"){
        return `You win! ${PlayerSelection} beats ${computerSelection}`;

    }else {
        return `Computer Won! ${computerSelection} beats ${PlayerSelection}`;
    }

}

function getPlayerChoice(){
    let validateInput = false;
    while (validateInput== false){
        const choice = prompt("Rock Paper Scissors");
        if(choice==null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validateInput == true;
            return choiceInLower; 
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome")
    for(let i = 0; i < 5; i++){
        const PlayerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(PlayerSelection, computerSelection));
        console.log("------------------");
        if (checkWinner(PlayerSelection,computerSelection)== "player"){
            scorePlayer++;
        } else if((checkWinner(PlayerSelection,computerSelection)== "computer")){
            scoreComputer++;
        }
    }

    console.log("Gave Over");
    if (scorePlayer > scoreComputer){
        console.log("You are the overall winner")
    }else{
        console.log("Computer is the overall winner");
    }
}
     game();
