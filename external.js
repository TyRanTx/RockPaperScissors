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

    if (playerSelectionLower === computerSelection) {
        return "It's a draw!" + ' Computer Selection was: ' + computerSelection;
    }
    else if(playerSelectionLower != 'rock' && playerSelectionLower !='paper' && playerSelectionLower !='scissor'){
        return 'Wrong value';
    }
    else if (playerSelectionLower === 'rock' && computerSelection === 'scissor') {
        return 'You won' + ' Computer Selection was: ' + computerSelection;
    }
    else if (playerSelectionLower === 'scissor' && computerSelection === 'paper') {
        return 'You won' + ' Computer Selection was: ' + computerSelection;
    }
    else if (playerSelectionLower === 'paper' && computerSelection === 'rock') {
        return 'You won' + ' Computer Selection was: ' + computerSelection;
    }
    else
        return 'You lost' + ' Computer Selection was: ' + computerSelection;
}

console.log(playRound('ScissoR', getComputerChoice()));