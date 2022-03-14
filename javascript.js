function generateRandomNum(){
    return Math.floor(Math.random() * 3);
}

function computerPlay(){
    switch( generateRandomNum() ){
        case 0:
            return "stone";
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function round(cs,ps){
    if(cs === ps)
      return "Oooh!! A draw";
    else if ( (cs === 'stone' && ps === 'paper') || (cs === 'paper' && ps === 'scissors') || (cs === 'scissors' && ps === 'stone') )
      return `Congrats!! You win as ${ps} beats ${cs}`;
    else if ( (ps === 'stone' && cs === 'paper') || (ps === 'paper' && cs === 'scissors') || (ps === 'scissors' && cs === 'stone') )
      return `Oh no! You lose as ${cs} beats ${ps}`;
    else 
      return 'You had one job you idiot!!';
}

function game(){
    for( let i = 1; i<6; i++){
        console.log(`Round ${i}`);
        const computerSelection = computerPlay();
        const playerSelection = prompt('Enter your selection player','').toLowerCase();

        console.log(round(computerSelection, playerSelection));

    }
}

game();