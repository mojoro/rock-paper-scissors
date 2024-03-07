// Uses Math.random to generate a random choice of rock, paper, or scissors
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

// Takes player input and computer's choice and evaluates each case to determine the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let gameMessage = '';
    let winner = '';

    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            gameMessage = "You tied! Try again.";
            winner = "tie";
        }
        else if (computerSelection === "paper"){
            gameMessage = "You lose! Paper beats Rock.";
            winner = "computer";
        }
        else if (computerSelection === "scissors"){
            gameMessage = "You win! Rock beats Scissors.";
            winner = "player";
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            gameMessage = "You win! Paper beats Rock.";
            winner = "player";
        }
        else if (computerSelection === "paper"){
            gameMessage = "You tied! Try again.";
            winner = "tie";
        }
        else if (computerSelection === "scissors"){
            gameMessage = "You lose! Scissors beats Paper.";
            winner = "computer";
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            gameMessage = "You lose! Rock beats Scissors.";
            winner = "computer";
        }
        else if (computerSelection === "paper"){
            gameMessage = "You win! Scissors beats Paper.";
            winner = "player";
        }
        else if (computerSelection === "scissors"){
            gameMessage = "You tied! Try again.";
            winner = "tie";
        }
    }
    return [gameMessage, winner];
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playGame("rock");
});

paperBtn.addEventListener('click', () => {
    playGame("paper");
});

scissorsBtn.addEventListener('click', () => {
    playGame("scissors");
});

let playerWins = 0;
let computerWins = 0;

function playGame(playerSelection){
    const resultDiv = document.querySelector('.result');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = result[0];
    resultDiv.style.marginTop = '10px';

    const playerScore = document.createElement('p');
    const computerScore = document.createElement('p');

    playerScore.textContent = "Player Score: "
    computerScore.textContent = "Computer Score: "

    resultDiv.appendChild(playerScore);
    resultDiv.appendChild(computerScore);

    const playerWinsEle = document.createElement('b');
    const computerWinsEle = document.createElement('b');

    playerScore.appendChild(playerWinsEle);
    computerScore.appendChild(computerWinsEle);

    if (result[1] === "player"){
        playerWins++;
    }
    else if (result[1] === "computer"){
        computerWins++;
    }

    playerWinsEle.textContent = playerWins;
    computerWinsEle.textContent = computerWins;

    if (playerWins === 5 && playerWins > computerWins){
        alert("You won! Congratulations.");
    }

    if (computerWins === 5 &&  computerWins > playerWins){
        alert("You lost! So sorry.");
    }
}