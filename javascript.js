// List of query selectors
const buttons = document.querySelectorAll("#buttons-container button");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score")
const finalResult = document.querySelector("#final-result");
const buttonsContainer = document.querySelector("#buttons-container");
const resultsContainer = document.querySelector("#results-container");
const playAgainButton = document.querySelector("#again-button");

playAgainButton.addEventListener("click", ()=> {
    playAgainButton.classList.toggle("hidden");
    buttonsContainer.classList.toggle("hidden");
    roundResult.textContent = "";
    score.textContent = "";
    finalResult.textContent = "";
});




// Initial playing score
let playerScore = 0;
let computerScore = 0;

// Add a play round function to each playing  option button 
buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});


function playRound (e) {

    // A variable containing the clicked option id attribute (rock, paper or scissors);
    let playerSelection = e.target.id;

    // Store the return value of the called function
    let computerSelection = getComputerChoice ();


    // A function that returns a random value between rock, paper or scissors
    function getComputerChoice () {
        let choice = ['rock', 'paper', 'scissors'];

        // get random index value
        let randomIndex = Math.floor(Math.random()*choice.length);

        // get random item
        let randomItem = choice[randomIndex];
        return randomItem;
    }

    // Create the variables that contains the possible outcomes of each game round
    let win = playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"; 
    
    let lose = playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock";
    
    let tie = playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors"
    
    let gameResult = win || lose || tie;

    // Create a switch statement that evaluates againts the game result and then prints the result and keep the score of each round 
    switch (gameResult) {
        case win: {
            // Add the printResult text to the previously empty round-result div element
            roundResult.textContent = `You WIN this round! \n${playerSelection} beats ${computerSelection}`;
            // Add a point to playerScore variable  
            ++playerScore;
            break;
            
        }
        case lose: {
            roundResult.textContent = `You LOSE this round! \n${playerSelection} loses against ${computerSelection}`;
            ++computerScore;
            break;
        }
        case tie: {
            roundResult.textContent = `It's a TIE! \n${playerSelection} ties against ${computerSelection}`;
            break;  
        }
        
    }  
        
    // Print the score of each round 
    score.textContent = `Player: ${playerScore} vs  Computer: ${computerScore}`;


    // When either the player or computer reaches 5 points
    if (playerScore === 5) {
        finalResult.textContent = "You ROCK!! \nYou WON THE GAME!!";
        playAgain();
        // Restart the score


    }

    if (computerScore === 5) {

        finalResult.textContent = "You LOSE the game!!";
        playAgain();
        // Restart the score


    }
    
    

    function playAgain () {
        // Remove the rock, paper and scissors buttons
        buttonsContainer.classList.toggle("hidden");
        // Toggles class "hidden" OFF (makes the button visible) 
        playAgainButton.classList.toggle("hidden");
        playerScore = 0;
        computerScore = 0;

    }



}
    



    


