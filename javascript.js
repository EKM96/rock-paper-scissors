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

    // Create  the variables that contain the possible outcomes of each game round
    let win = playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"; 
    
    let lose = playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock";
    
    let gameResult = win || lose || "tie";

    // Create a switch statement that evaluates againts the game result to print a message
    switch (gameResult) {
        case win: {
            let result = `You win this round! \n${playerSelection} beats ${computerSelection}`;
            console.log(result);
            break;
            
        }
        case lose: {
            let result = `You lose this round! \n${playerSelection} loses against ${computerSelection}`;
            console.log(result);
            break;
        }
        default: {
            let result = `It's a tie! \n${playerSelection} ties against ${computerSelection}`;
            console.log(result);  
        }
        
    }   
}   
