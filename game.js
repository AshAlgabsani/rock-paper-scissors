// Human choice: getHumanChoice()
// Round play: playRound()
// Entire game logic: playGame()
// Rock Paper Scissors game 

const getComputerChoice = () => {
    const computerChoice = ['rock', 'paper', 'scissors']
    const randomComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randomComputerChoice;
}; 

const getHumanChoice = () => {
    // ask the user for their choice, and normalize their input.
    let humanChoice = prompt('What is your choice').toLowerCase().trim();

    // validate their input, and return the choice.
    if(humanChoice === 'rock'){
        return 'rock'
    } else if (humanChoice === 'paper'){
        return 'paper'
    } else if (humanChoice === 'scissors'){
        return 'scissors'
    } else {
        return 'Please input a valid choice: rock, paper, scissors'
    }
}; 

// Keep scores in global scope so both playRound() and playGame() can access them.
let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    // Defining rock scenarios
    if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            return 'Computer Won!'
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++;
            return 'You Won!'
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            return 'It\'s a tie!'
    } 
    // Defining paper scenarios
      else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++;
            return 'You Won!'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            return 'Computer Won!'
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            return 'It\'s a tie!'
    }
    // Defining Scissors scenarios
      else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return 'You Won!'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            return 'Computer Won!'
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            return 'It\'s a tie!'
    }
};

const playGame = () => {
    // Play five rounds of Rock Paper Scissors.
    for (let i = 0; i < 5; i++) {
        // Generate computer choice.
        const computerSelection = getComputerChoice();
        // Get the player's choice.
        const humanSelection = getHumanChoice();
        // play one round and store the result.
        const roundResult = playRound(humanSelection, computerSelection);
        // display the winner of the current round.
        // later will display it to the user using DOM Manipulation.
        console.log(roundResult)
    }
    // Determine the game winner after all five rounds!
    if (humanScore > computerScore) {
        return 'You Won the Game!'
    } else if (computerScore > humanScore) {
        return 'Computer Won the Game, Loser!'
    } else {
        return 'The game is a tie!!!'
    }
}; 
// Start the game and store the final result.
const gameResult = playGame(); 
// Display the Game winner.
console.log(gameResult);

/*
Note:
This version uses prompt() for input and console.log() for output.
Displaying the game in the browser will be implemented later after
learning DOM manipulation.
*/