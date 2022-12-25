function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

function checker() {
    if (playerScore.textContent == '5' || pcScore.textContent == '5'){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (Number(playerScore.textContent) > Number(pcScore.textContent)) {
            announcer.textContent = 'Game over, Player wins.'
        }else {
            announcer.textContent = 'Game over, Computer wins.'
        }
        const restart = document.createElement('button')
        restart.innerText = 'Play again?'
        document.querySelector('#results').append(restart)
        restart.addEventListener('click', function(){
            playerScore.textContent = '0'
            pcScore.textContent = '0'
            announcer.textContent = ''
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
            restart.remove()
        })
    }
}

function playRound(input) {
    let pc = getComputerChoice().toLowerCase();
    let playerChoice = input.toLowerCase();

    if (playerChoice == pc){
        announcer.textContent = 'Draw!';
    }
    else if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors'){
        console.log(playerChoice)
        announcer.textContent = 'Invalid input.'
    }
    else if (playerChoice == 'rock' && pc == 'scissors') {
        playerScore.textContent = Number(playerScore.textContent) + 1
        announcer.textContent = 'Player wins!'
        checker()
    }
    else if (playerChoice == 'scissors' && pc == 'paper') { 
        playerScore.textContent = Number(playerScore.textContent) + 1
        announcer.textContent = 'Player wins!'
        checker()
    }
    else if (playerChoice == 'paper' && pc == 'rock') {
        playerScore.textContent = Number(playerScore.textContent) + 1
        announcer.textContent = 'Player wins!'
        checker()
    }
    else {
        pcScore.textContent = Number(pcScore.textContent) + 1
        announcer.textContent = 'Computer wins!';
        checker()
    }
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

let playerScore = document.querySelector('#playerScore')
let pcScore = document.querySelector('#pcScore')
let announcer = document.querySelector('#announcer')

rock.addEventListener('click', function(){
    playRound('rock')
})
paper.addEventListener('click', function(){
    playRound('paper')
})
scissors.addEventListener('click', function(){
    playRound('scissors')
})
