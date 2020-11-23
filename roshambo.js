const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.id = "rock";
rock.textContent = "ROCK!!!";
container.appendChild(rock);

const paper = document.createElement('button');
paper.id = "paper";
paper.textContent = "PAPER!!!";
container.appendChild(paper);

const scissors = document.createElement('button');
scissors.id = "scissors";
scissors.textContent = "SCISSORS!!!";
container.appendChild(scissors);

function computerPlay() {
    const shoot = ['Rock!', 'Paper!', 'Scissors!'];
    let rand = Math.floor(Math.random()*shoot.length);
    return shoot[rand];
}

let wins = 0;
let losses = 0;
let draws = 0;

function playRound(playerSelection) {
    let Player = playerSelection;
    let CPU = computerPlay();
    let results = '';

    if ((Player == "paper" && CPU == 'Rock!') || (Player == "scissors" && CPU == 'Paper!') || (Player == "rock" && CPU == 'Scissors!')) {
        wins++;
        console.log(results = 'YOU WIN!!!');
    } else if ((Player == "rock" && CPU == 'Paper!') || (Player == "paper" && CPU == 'Scissors!') || (Player == "scissors" && CPU == 'Rock!')) {
        losses++;
        console.log(results = 'you lose...');
    } else {
        draws++;
        console.log(results = 'Draw');
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "rock") {
            playRound(button.id);
        } else if (button.id == "paper") {
            playRound(button.id);
        } else if (button.id == "scissors") {
            playRound(button.id);
        }
    });
  });