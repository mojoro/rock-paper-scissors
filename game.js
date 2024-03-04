function getComputerChoice() {
    let choice = Math.floor(Math.random()*10) % 3;
    if (choice === 0){
        return "Rock";
    }
    if (choice === 1){
        return "Paper";
    }
    if (choice === 2){
        return "Scissors";
    }
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "You tied! Try again.";
        }
        else if (computerSelection === "paper"){
            return "You lose! Paper beats Rock.";
        }
        else if (computerSelection === "scissors"){
            return "You win! Rock beats Scissors.";
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats Rock.";
        }
        else if (computerSelection === "paper"){
            return "You tied! Try again.";
        }
        else if (computerSelection === "scissors"){
            return "You lose! Scissors beats Paper.";
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats Scissors.";
        }
        else if (computerSelection === "paper"){
            return "You win! Scissors beats Paper.";
        }
        else if (computerSelection === "scissors"){
            return "You tied! Try again.";
        }
    }
}


function playGame(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Please enter "Rock", "Paper", or "Scissors"');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();