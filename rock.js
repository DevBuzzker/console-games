const args = process.argv.slice(2);
// console.log(args);
const rockConst = "rock";
const paperConst = "paper";
const scissorsConst = "scissors";
const correctArgs = [rockConst, paperConst, scissorsConst];

if (args.length !== 1) {
  console.error("Provide only one argument: rock, paper or scissors.");
  process.exit(2);
}
const userInput = args.at(0);
console.log("User input: " + userInput);

if (!correctArgs.some((x) => x === userInput)) {
  console.error("Wrong input - type rock, paper or scissors.");
}

const computerChoiseInt = Math.floor(Math.random() * 3); //0, 1 or 2
const computerChoise = correctArgs[computerChoiseInt];
console.log("Computer choise: " + computerChoise);
if (userInput === computerChoise) {
  console.log("It's a draw!");
  process.exit(1);
}

// win if player has left first value and opponent second
const winConditions = [
  [rockConst, scissorsConst],
  [scissorsConst, paperConst],
  [paperConst, rockConst],
];

const winConditionToCheck = winConditions.find((x) => x[0] === userInput);
if (winConditionToCheck[1] === computerChoise) {
  console.log("You win!");
  process.exit(0);
} else {
  console.log("Computer won!");
  process.exit(1);
}
