const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score")
const finalResult = document.querySelector("#final-result");


buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});


function playRound (e) {
    let idValue = e.target.id;
    let computerSelection = getComputerChoice ();
    let playerSelection = getPlayerChoice();
    let playerScore = 0;
    let computerScore= 0;

    function getPlayerChoice () {
        switch (idValue) {
            case "rock": {
                return "rock";      
            }
            case "paper": {
                return "paper" 
            }
            case "scissors": {
                return "scissors"
            }    
        }
    }

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

    // Create a switch statement that evaluates againts the game result to print the result and keep the score of each round 
    switch (gameResult) {
        case win: {
            let printResult = `You win this round! \n${playerSelection} beats ${computerSelection}`;
            roundResult.textContent = printResult;
            ++playerScore;
            break;
            
        }
        case lose: {
            let printResult = `You lose this round! \n${playerSelection} loses against ${computerSelection}`;
            roundResult.textContent = printResult;
            ++computerScore;
            break;
        }
        case tie: {
            let printResult = `It's a tie! \n${playerSelection} ties against ${computerSelection}`;
            roundResult.textContent = printResult;
            break;  
        }
        
    }  
        
    // Prints the score of each round 
    score.textContent = `Player: ${playerScore} vs  Computer: ${computerScore}`;
}

