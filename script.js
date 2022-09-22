let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget= () => {
  return targetNumber=Math.floor(Math.random()*9);
}
console.log(generateTarget())

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (Math.abs(humanGuess-targetNumber)<=Math.abs(computerGuess-targetNumber)) {
    return true;
  } else {
    return false;
  }
}
console.log(compareGuesses(3,7,targetNumber))

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
  
const advanceRound = () => {
currentRoundNumber++;
}
