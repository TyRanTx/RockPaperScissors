let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower != 'rock' && playerSelectionLower != 'paper' && playerSelectionLower != 'scissor') {
        return 'Wrong value';
    }

    if (playerSelectionLower === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelectionLower != 'rock' && playerSelectionLower != 'paper' && playerSelectionLower != 'scissor') {
        return 'Wrong value';
    }

    if ((playerSelectionLower === 'rock' && computerSelection === 'scissor') ||
        (playerSelectionLower === 'scissor' && computerSelection === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelection === 'rock')) {
        playerScore = playerScore + 1;

        return 'You won';
    }

    else {
        computerScore = computerScore + 1;

        return 'You lost';
    }
}

function game() {

    while(playerScore<5 && computerScore<5) {
    console.log(playRound("Rock", getComputerChoice()));
    console.log(`Score: ${playerScore} ${computerScore}`);
    }
}

game();