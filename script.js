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

const playerScoreHTML = document.querySelector('#playerScore');
const computerScoreHTML = document.querySelector('#computerScore');

function playRound(playerSelection, computerSelection) {

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower === computerSelection) {
        console.log("It's a tie");
        return;
    }

    if ((playerSelectionLower === 'rock' && computerSelection === 'scissor') ||
        (playerSelectionLower === 'scissor' && computerSelection === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelection === 'rock')) {
        playerScore = playerScore + 1;
        console.log('You won');
        playerScoreHTML.textContent = `${playerScore}`;
        return;
    }

    else {
        computerScore = computerScore + 1;
        computerScoreHTML.textContent = `${computerScore}`;
        console.log('You lost');
        return;
    }
}

function submit() {
    const compChoice = getComputerChoice();
    if (playerScore < 5 && computerScore < 5) {
    pselection.className = `${this.id + 'Selection'}`;
    cselection.className = `${compChoice + 'Selection'}`;
    playRound(this.id, compChoice);
    }

    if(playerScore === 5){
    result.textContent = 'You won!';
    }
    else if(computerScore === 5){
        result.textContent = 'You lost!';
    }
}

const btn = document.querySelectorAll('.btn');
const pselection = document.querySelector('#pselection');
const result = document.querySelector('#result');

btn.forEach(element => element.addEventListener('click', submit));

