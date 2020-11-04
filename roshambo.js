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

// function game() {
//     let games = 0; 
//     while (games < 5) {
//         let playerSelection = prompt('CHOOSE YOUR FIGHTER!!!1!!111');
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         games++;
//     }
//     if (wins > losses) {
//             console.log(`CONGRATULATIONS!!!1!!111 >:D Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
//         } else if (wins < losses) {
//             console.log(`you lost the match... :( Player - ${wins} | CPU - ${losses} | Draws - ${draws}`);
//         } else {
//             console.log(`Whoa... It's a tie!! :O Player - ${wins} | CPU ${losses} | Draws - ${draws}`);
//         }
// }

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