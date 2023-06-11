let computerSelection,
   playerSelection;

let playerScore= 0;
let computerScore= 0;


// Create a function that takes "computerSelection" and "playerSelection" as parameters and  
// returns a string that declares the result (win, loss or tie) of the round.
function playRound (playerSelection, computerSelection) {

    playerSelection = getPlayerChoice ();
    computerSelection = getComputerChoice ();
    

    // Create a function that prompts the user to choose between "rock", "paper" or "scissors" 
    // and converts the prompt to lower case
    function getPlayerChoice () {
        return prompt('Choose Rock, Paper, or Scissors', "").toUpperCase();
    }


    // Create a function that randomly returns either "rock", "paper", or "scissors"
    function getComputerChoice () {
        let choice = ['ROCK', 'PAPER', 'SCISSORS'];

        // get random index value
        let randomIndex = Math.floor(Math.random()*choice.length);

        // get random item
        let item = choice[randomIndex];
        return item;
    }

    
    // Create the variables that contains the possible outcomes of each game round
    let win = playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER"; 
    
    let lose = playerSelection === "ROCK" && computerSelection === "PAPER" || 
        playerSelection === "PAPER" && computerSelection === "SCISSORS" || 
        playerSelection === "SCISSORS" && computerSelection === "ROCK";
    
    let gameResult = win || lose || "tie";
    

    // Create a switch statement that evaluates againts the game result to print the result and keep the score of each round 
    switch (gameResult) {
        case win: {
            let printResult = `You win this round! \n${playerSelection} beats ${computerSelection}`;
            console.log(printResult);
            ++playerScore;
            break;
            
        }
        case lose: {
            let printResult = `You lose this round! \n${playerSelection} loses against ${computerSelection}`;
            console.log(printResult);
            ++computerScore;
            break;
        }
        default: {
            let printResult = `It's a tie! \n${playerSelection} ties against ${computerSelection}`;
            console.log(printResult);  
        }
        
    }  
    
    // Print the score of each round 
    console.log(`Player: ${playerScore} vs  Computer: ${computerScore}`);
}   


//Create a function that plays 5 rounds of the game and prints the final result
function game() {
    for (let i=0; i<5; i++) {
        playRound (playerSelection, computerSelection);
    }

    if (playerScore>computerScore) {
        console.log('You WON the game!');
    } else if (playerScore<computerScore) {
        console.log('You LOSE the game!');
    } else {
        console.log('You TIED the game!');
    }
}

game();

