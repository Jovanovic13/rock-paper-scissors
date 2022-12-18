function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound() {
    let pc = getComputerChoice().toLowerCase();
    let playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerChoice == pc){
        return 'Draw!';
    }
    else if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        console.log(playerChoice)
        return 'Invalid input.'
    }
    else if (playerChoice == 'rock' && pc == 'scissors') {
        return 'Player wins!'
    }
    else if (playerChoice == 'scissors' && pc == 'paper') { 
        return 'Player wins!'
    }
    else if (playerChoice == 'paper' && pc == 'rock') {
        return 'Player wins!'
    }
    else {
        return 'Computer wins!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (true){
        if (playerScore == 5 || computerScore == 5){
            console.log('Final score:');
            console.log('Player: ' + String(playerScore));
            console.log('Computer: ' + String(computerScore));
            break;
        }
        let win = playRound();
        console.log(win);
        let winner = win.split(' ')[0].toLowerCase();
        if (winner == 'player'){
            playerScore++;
            console.log('Player: ' + String(playerScore));
            console.log('Computer: ' + String(computerScore));
        }else if (winner == 'computer'){
            computerScore++;
            console.log('Player: ' + String(playerScore));
            console.log('Computer: ' + String(computerScore));
        }else {
            console.log('Player: ' + String(playerScore));
            console.log('Computer: ' + String(computerScore));
        }
    }
}