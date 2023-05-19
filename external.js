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

    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower === computerSelection) {
        return "It's a tie!";
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

function submit() {
    if (playerScore < 5 && computerScore < 5) {
        result.textContent = playRound(this.id, getComputerChoice());
        score.textContent = `Score: ${playerScore} ${computerScore}`;
    }
}

const container = document.querySelector('#container');

const result = document.createElement('div');
result.setAttribute('id', 'result');
container.appendChild(result);

const score = document.createElement('div');
result.setAttribute('id', 'score');
container.appendChild(score);

const btn = document.querySelectorAll(".btn");

btn.forEach(element => {
    element.addEventListener('click', submit);
})