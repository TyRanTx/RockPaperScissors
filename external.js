function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    switch(randomValue){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissor';
    }
}

console.log(getComputerChoice());