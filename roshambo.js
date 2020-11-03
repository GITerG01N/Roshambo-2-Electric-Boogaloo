function computerPlay() {
    const shoot = ['Rock!', 'Paper!', 'Scissors!'];
    let rand = Math.floor(Math.random()*shoot.length);
    return shoot[rand];
}

let wins = 0;
let losses = 0;
let draws = 0;

function playRound(playerSelection, computerSelection) {
    let Player = playerSelection.toLowerCase();
    let CPU = computerSelection;
    let results = '';

    if ((Player == "paper" && CPU == 'Rock!') || (Player == "scissors" && CPU == 'Paper!') || (Player == "rock" && CPU == 'Scissors!')) {
        wins++;
        return results = 'YOU WIN!!!';
    } else if ((Player == "rock" && CPU == 'Paper!') || (Player == "paper" && CPU == 'Scissors!') || (Player == "scissors" && CPU == 'Rock!')) {
        losses++;
        return results = 'you lose...';
    } else {
        draws++;
        return results = 'Draw';
    }
}

function game1() {
    let games = 0; 
    while (games < 1) {
        let playerSelection = 'rock';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        games++;
    }
    if (wins > losses) {
            console.log(`CONGRATULATIONS!!!1!!111 >:D Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else if (wins < losses) {
            console.log(`you lost the match... :( Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else {
            console.log(`Whoa... It's a tie!! :O Player - ${wins} | CPU ${losses} | Draws - ${draws}`);
        }
}
function game2() {
    let games = 0; 
    while (games < 1) {
        let playerSelection = 'paper';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        games++;
    }
    if (wins > losses) {
            console.log(`CONGRATULATIONS!!!1!!111 >:D Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else if (wins < losses) {
            console.log(`you lost the match... :( Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else {
            console.log(`Whoa... It's a tie!! :O Player - ${wins} | CPU ${losses} | Draws - ${draws}`);
        }
}
function game3() {
    let games = 0; 
    while (games < 1) {
        let playerSelection = 'scissors';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        games++;
    }
    if (wins > losses) {
            console.log(`CONGRATULATIONS!!!1!!111 >:D Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else if (wins < losses) {
            console.log(`you lost the match... :( Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
        } else {
            console.log(`Whoa... It's a tie!! :O Player - ${wins} | CPU ${losses} | Draws - ${draws}`);
        }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', game1);

const paper = document.querySelector('#paper');
paper.addEventListener('click', game2);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', game3);