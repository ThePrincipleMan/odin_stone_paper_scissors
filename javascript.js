function computerSelection(){
    const randomNum = Math.floor(Math.random()*3);
    switch(randomNum){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function setChoice(choice){
    playerSelection = choice;
}

function round(ps){
    const cs = computerSelection();
    if( cs === ps )
        roundWinner = 'tie';
    else if ( (cs==='rock' && ps==='paper') || (cs==='paper' && ps==='scissors') || (cs==='scissors' && ps==='rock')){
        playerScore++;
        roundWinner = 'p';
    }
    else if ( (cs==='paper' && ps==='rock') || (cs==='scissors' && ps==='paper') || (cs==='rock' && ps==='scissors')){
        computerScore++;
        roundWinner = 'c';
    }
    updateScreen(playerScore, computerScore, roundWinner, ps, cs);
}

function updateScreen(pSco, cSco, winner, ps,cs ){
    pScore.textContent(`Your score is ${pSco}`);
    cScore.textContent(`Computer's score is ${cSco}`);
    if(winner === 'tie')
        message.textContent(`Its a tie!`);
    else if(winner === 'c')
        message.textContent(`Oh no! you lost as ${cs} beats ${ps}`);
    else if(winner === 'p')
        message.textContent(`Yay!! you won as ${ps} beats ${cs}`);
    pSelection.textContent(`You chose ${ps}`);
    cSelection.textContent(`Computer chose ${cs}`);
}

function checkGame(c, p){
    if(c===5 || p===5)
        return 0;
    return 1;
}

function game(){
    while(checkGame(computerScore, playerScore)){
        round();
    }
    message.textContent(`Round over, restart to play some more`);
}

function restartGame(){
    computerScore = 0;
    playerScore = 0;
    playerSelection = '';
    roundWinner = '';
}

// user interface
let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let roundWinner = '';

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const pSelection = document.getElementById('pSelection');
const cSelection = document.getElementById('cSelection');
const message = document.getElementById('message');
const restart = document.getElementById('restart');

rockBtn.addEventListener('click', setChoice('rock'));
paperBtn.addEventListener('click', setChoice('paper'));
scissorsBtn.addEventListener('click', setChoice('scissors'));
restart.addEventListener('click', restartGame());