let computerSelection,
    playerSelection;


// Create a function that takes "computerSelection" and "playerSelection" as parameters and  
// returns a string that declares the result (win, loss or tie) of the round.
function playRound (playerSelection, computerSelection) {

    playerSelection = getPlayerChoice ();
    computerSelection = getComputerChoice ();
    

    // Create a function that prompts the user to choose between "rock", "paper" or "scissors" 
    // and converts the prompt to lower case
    function getPlayerChoice () {
        return prompt('Choose Rock, Paper or Scissors', "").toLowerCase();
    }


    // Create a function that randomly returns either "rock", "paper", or "scissors"
    function getComputerChoice () {
        let choice = ['rock', 'paper', 'scissors'];

        // get random index value
        let randomIndex = Math.floor(Math.random()*choice.length);

        // get random item
        let item = choice[randomIndex];
        return item;
    }


    if (playerSelection === "rock" && computerSelection === "scissors") {
        let result = console.log(`You win this round! \n${playerSelection} beats ${computerSelection}`);
        return result;
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        let result = console.log(`You win this round!" \n${playerSelection} beats ${computerSelection}`);
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        let result = console.log(`You win this round! \n${playerSelection} beats ${computerSelection}`);
        return result;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        let result = console.log(`You lose this round! \n${playerSelection} loses against ${computerSelection}`);
        return result;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        let result = console.log(`You lose this round! \n${playerSelection} loses against ${computerSelection}`);
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        let result = console.log(`You lose this round! \n${playerSelection} loses against ${computerSelection}`);
        return result; 
    } else {
        let result = console.log(`It's a tie! \n${playerSelection} ties against ${computerSelection} `);
        return result;
    }
    
} 

    

for (let i=0; i<5; i++) {
    playRound (playerSelection, computerSelection);
}




