let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

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

function setChoice(playerSelection){
    if(playerScore===5 || computerScore===5){
        finalMessage();
        message.textContent = `Round over, restart to play some more`;
    }
    round(playerSelection);
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
    updateScreen(roundWinner, ps, cs);
}

function updateScreen(winner, ps,cs ){
    pScore.textContent = `Player : ${playerScore}`;
    cScore.textContent = `Computer : ${computerScore}`;
    if(winner === 'tie')
        message.textContent = `Its a tie!`;
    else if(winner === 'c')
        message.textContent = `Oh no! you lost as ${cs} beats ${ps}`;
    else if(winner === 'p')
        message.textContent = `Yay!! you won as ${ps} beats ${cs}`;
    pSelection.textContent = `You chose ${ps}`;
    cSelection.textContent = `Computer chose ${cs}`;
}

function isGameOver(){
    if(computerScore === 5 || playerScore === 5)
        return true;
    return false;
}

function finalMessage(){
    if(playerScore>computerScore)
        message.textContent = `Yay! you won with a margin of ${playerScore-computerScore}`;
    else    
        message.textContent = `You lost :( lets not discss the margin`;
}

function restartGame(){
    computerScore = 0;
    playerScore = 0;
    playerSelection = '';
    roundWinner = '';
}

// user interface


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const pSelection = document.getElementById('pSelection');
const cSelection = document.getElementById('cSelection');
const message = document.getElementById('message');
const restart = document.getElementById('restart');

rockBtn.addEventListener('click', () => setChoice('rock'));
paperBtn.addEventListener('click', () => setChoice('paper'));
scissorsBtn.addEventListener('click', () => setChoice('scissors'));
restart.addEventListener('click', restartGame);