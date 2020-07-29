/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 21;

if (votingAge > 18) {
  console.log("the answer to task 1 is " + true);
} else {
  console.log("the answer to task 1 is " + false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let myCat;
const myDog = "Fido";

if (myDog == "Spot") {
  // () the test -- always goes in paranthesis
  myCat = "Fuzzy"; // the consequence of the test, one equal sign because it assigns a value not checking equality
  console.log("the answer to task b is " + myCat); // show me the result
} else {
  console.log("the answer to task b is " + "My cat has no name. Sad face.");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
const num = Number("1999");
console.log("the answer to task c is " + num);

//Task d: Write a function to multiply a*b
function multiply(a, b) {
  return a * b;
}
const product = multiply(2, 4);
console.log("the answer to task d is " + product);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function humanDogYears(age) {
  console.log("the answer to task 2 is " + age * 7);
}

humanDogYears(27);
/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight CHECK
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function rawFood(age, weight) {
  if (age >= 1) {
    if (weight <= 5) {
      console.log("the answer to task 3 is  " + 0.05 * weight);
    } else if (weight >= 6 && weight <= 10) {
      console.log("the answer to task 3 is  " + 0.04 * weight);
    } else if (weight >= 11 && weight <= 15) {
      console.log("the answer to task 3 is  " + 0.03 * weight);
    } else {
      console.log("the answer to task 3 is  " + 0.02 * weight);
    }
  } else {
    if (age < 1) {
    } else if (age > 0.166666666666667 && age < 0.333333333333333) {
      // 2 - 4 months 10% of their body weight
      console.log("the answer to task 3 is  " + 0.1 * weight);
    } else if (age > 0.333333333333333 && age < 0.583333333333333) {
      // 4 - 7 months 5% of their body weight
      console.log("the answer to task 3 is  " + 0.05 * weight);
    } else {
      console.log("the answer to task 3 is  " + 0.04 * weight);
    }
  }
}

rawFood(1, 15);
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

//let userChoice = prompt("Do you choose Rock, Paper, or Scissors?");
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function rps(choice) {
  let playerChoice = choice;

  if (playerChoice == "rock") {
    playerChoice = 0;
  } else if (playerChoice == "paper") {
    playerChoice = 1;
  } else if (playerChoice == "scissors") {
    playerChoice = 2;
  } else {
    return "Please pick an actual response.";
  }

  let computerChoice = Math.floor(Math.random() * 3);

  let result;

  // ROCK = 0
  // PAPER = 1
  // SCISSORS = 2
  if (playerChoice === 0 && computerChoice === 2) {
    result = "Player wins!";
    // ROCK BEATS SCISSORS
  } else if (playerChoice === 2 && computerChoice === 1) {
    result = "Player wins!";
    //SCISSORS BEATS PAPER
  } else if (playerChoice === 1 && computerChoice === 0) {
    result = "Player wins!";
    //PAPER BEATS ROCK
  } else if (playerChoice === 2 && computerChoice === 0) {
    result = "You lose!";
    // ROCK BEATS SCISSORS
  } else if (playerChoice === 1 && computerChoice === 2) {
    result = "You lose!";
    // SCISSORS BEATS PAPER
  } else if (playerChoice === 0 && computerChoice === 1) {
    result = "You lose!";
    // PAPER BEATS ROCK
  } else if (playerChoice === 0 && computerChoice === 0) {
    result = "You tie!";
  } else if (playerChoice === 1 && computerChoice === 1) {
    result = "You tie!";
  } else if (playerChoice === 2 && computerChoice === 2) {
    result = "You tie!";
  }

  if (playerChoice === 0) {
    playerChoice = "rock";
  } else if (playerChoice === 1) {
    playerChoice = "paper";
  } else if (playerChoice === 2) {
    playerChoice = "scissors";
  }

  // Convert computer choice back to a string
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  }

  console.log("the answer to task 4 is " + playerChoice);
  console.log("the answer to task 4 is " + computerChoice);
  return result;
}
rps("rock");

// const rps = (choice) => {

//     // PLAYER to lowercase
//     let playerChoice = choice.toLowerCase();

//     // Convert player choice to int
//     if (playerChoice === 'rock') {
//       playerChoice = 0;
//     } else if (playerChoice === 'paper'){
//       playerChoice = 1;
//     } else if (playerChoice === 'scissors'){
//       playerChoice = 2;
//     } else {
//       return 'TYPE A ACUTALLY GAME CHOICE!'
//     }

//     // COMPUTER
//     let computerChoice = Math.floor(Math.random() * 3);

//     // CONDITIONALS
//     // 0 = rock
//     // 1 = paper
//     // 2 = scissors

//     // WHO WINS ?
//     let result;

//     if(playerChoice === 0 && computerChoice === 1){
//       // ROCK 0 VS PAPER = PAPER WINS
//       result = 'Player wins!'
//     } else if (playerChoice === 0 && computerChoice === 2){
//       // ROCK VS SCISSORS = ROCK WINS
//       result = 'Player wins!'
//     } else if (playerChoice === 0 && computerChoice === 0){
//       // ROCK VS ROCK = DRAW
//       result = 'Draw!'
//     } else if (playerChoice === 1 && computerChoice === 2){
//       // PAPER VS SCISSORS = SCISSORS WINS
//       result = 'Computer Wins!'
//     } else if (playerChoice === 1 && computerChoice === 0){
//       // PAPER VS ROCK = PAPER WINS
//       result = 'Player Wins!'
//     } else if (playerChoice === 1 && computerChoice === 1){
//        // PAPER VS PAPER = DRAW
//       result = 'Draw!'
//     } else if (playerChoice === 2 && computerChoice === 0){
//       // SCISSORS VS ROCK = ROCK WIN
//       result = 'Computer Wins!'
//     } else if (playerChoice === 2 && computerChoice === 1){
//        // SCISSORS VS PAPER = SCISSORS WIN
//        result = 'Player Wins!'
//     } else if (playerChoice === 2 && computerChoice === 2){
//       // SCISSORS VS SCISSORS = DRAW
//       result = 'Draw!'
//     }

//     // Convert player choice back to a string
//     if(playerChoice === 0){
//       playerChoice = 'rock';
//     } else if(playerChoice === 1){
//       playerChoice = 'paper'
//     } else if (playerChoice === 2){
//       playerChoice = 'scissors'
//     }

//     // Convert computer choice back to a string
//       if(computerChoice === 0){
//       computerChoice = 'rock';
//     } else if(computerChoice === 1){
//       computerChoice = 'paper'
//     } else if (computerChoice === 2){
//       computerChoice = 'scissors'
//     }

//     console.log('playerChoice: ', playerChoice)
//     console.log('computerChoice: ', computerChoice)
//     return result;
//   }
//   rps('rock');
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
//KM TO MILES == for an approximate result, divide the length of kilometers by 1.609

let kilo = prompt("How many kilometers would you like to convert?");
function convert() {
  return "answer to task 5  " + kilo / 1.609;
}

convert();

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
// multiply the length of feet by 30.48

let feet = prompt("How many feet would you like to convert?");
function convertFeet() {
  return "the answer to task 5 b is " + feet * 30.48;
}

convertFeet();

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(soda) {
  for (i = soda; i > 1; i--) {
    console.log(
      "the answer to task 6 is " +
        `${i} bottles of soda on the wall ${i} bottles of soda, take one down pass it around ${
          i - 1
        } bottles of soda on the wall`
    );
  }
}

annoyingSong(99);
// // /************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B 0.8
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function grade(number) {
  if (number >= 90 && number <= 100) {
    console.log("the answer to task 7 is  " + "You got an A!");
  } else if (number >= 80 && number <= 89) {
    console.log("the answer to task 7 is  " + "You got a B!");
  } else if (number >= 70 && number <= 79) {
    console.log("the answer to task 7 is  " + "You got a C!");
  } else if (number >= 60 && number <= 69) {
    console.log("the answer to task 7 is  " + "You got a D!");
  } else if (number < 60 && number >= 0) {
    console.log("the answer to task 7 is  " + "You got a F!");
  } else {
    console.log("the answer to task 7 is  " + "Enter a valid grade.");
  }
}

grade(0);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number
// const rps = (choice) => {

//     // PLAYER to lowercase
//     let playerChoice = choice.toLowerCase();

//     // Convert player choice to int
//     if (playerChoice === 'rock') {
//       playerChoice = 0;
//     } else if (playerChoice === 'paper'){
//       playerChoice = 1;
//     } else if (playerChoice === 'scissors'){
//       playerChoice = 2;
//     } else {
//       return 'TYPE A ACUTALLY GAME CHOICE!'
//     }

//     // COMPUTER
//     let computerChoice = Math.floor(Math.random() * 3);

//     // CONDITIONALS
//     // 0 = rock
//     // 1 = paper
//     // 2 = scissors

//     // WHO WINS ?
//     let result;

//     if(playerChoice === 0 && computerChoice === 1){
//       // ROCK 0 VS PAPER = PAPER WINS
//       result = 'Player wins!'
//     } else if (playerChoice === 0 && computerChoice === 2){
//       // ROCK VS SCISSORS = ROCK WINS
//       result = 'Player wins!'
//     } else if (playerChoice === 0 && computerChoice === 0){
//       // ROCK VS ROCK = DRAW
//       result = 'Draw!'
//     } else if (playerChoice === 1 && computerChoice === 2){
//       // PAPER VS SCISSORS = SCISSORS WINS
//       result = 'Computer Wins!'
//     } else if (playerChoice === 1 && computerChoice === 0){
//       // PAPER VS ROCK = PAPER WINS
//       result = 'Player Wins!'
//     } else if (playerChoice === 1 && computerChoice === 1){
//        // PAPER VS PAPER = DRAW
//       result = 'Draw!'
//     } else if (playerChoice === 2 && computerChoice === 0){
//       // SCISSORS VS ROCK = ROCK WIN
//       result = 'Computer Wins!'
//     } else if (playerChoice === 2 && computerChoice === 1){
//        // SCISSORS VS PAPER = SCISSORS WIN
//        result = 'Player Wins!'
//     } else if (playerChoice === 2 && computerChoice === 2){
//       // SCISSORS VS SCISSORS = DRAW
//       result = 'Draw!'
//     }

//     // Convert player choice back to a string
//     if(playerChoice === 0){
//       playerChoice = 'rock';
//     } else if(playerChoice === 1){
//       playerChoice = 'paper'
//     } else if (playerChoice === 2){
//       playerChoice = 'scissors'
//     }

//     // Convert computer choice back to a string
//       if(computerChoice === 0){
//       computerChoice = 'rock';
//     } else if(computerChoice === 1){
//       computerChoice = 'paper'
//     } else if (computerChoice === 2){
//       computerChoice = 'scissors'
//     }

//     console.log('playerChoice: ', playerChoice)
//     console.log('computerChoice: ', computerChoice)
//     return result;
//   }
//   rps('rock');

function rps(choice) {
  // PLAYER to lowercase
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();

  // Convert player choice to int
  if (playerChoice === "rock") {
    playerChoice = 0;
  } else if (playerChoice === "paper") {
    playerChoice = 1;
  } else if (playerChoice === "scissors") {
    playerChoice = 2;
  } else {
    return "TYPE A ACUTALLY GAME CHOICE!";
  }

  // COMPUTER
  let computerChoice = Math.floor(Math.random() * 3);

  // CONDITIONALS
  // 0 = rock
  // 1 = paper
  // 2 = scissors

  // WHO WINS ?
  let result;

  if (playerChoice === 0 && computerChoice === 1) {
    // ROCK 0 VS PAPER = PAPER WINS
    result = "Player wins!";
  } else if (playerChoice === 0 && computerChoice === 2) {
    // ROCK VS SCISSORS = ROCK WINS
    result = "Player wins!";
  } else if (playerChoice === 0 && computerChoice === 0) {
    // ROCK VS ROCK = DRAW
    result = "Draw!";
  } else if (playerChoice === 1 && computerChoice === 2) {
    // PAPER VS SCISSORS = SCISSORS WINS
    result = "Computer Wins!";
  } else if (playerChoice === 1 && computerChoice === 0) {
    // PAPER VS ROCK = PAPER WINS
    result = "Player Wins!";
  } else if (playerChoice === 1 && computerChoice === 1) {
    // PAPER VS PAPER = DRAW
    result = "Draw!";
  } else if (playerChoice === 2 && computerChoice === 0) {
    // SCISSORS VS ROCK = ROCK WIN
    result = "Computer Wins!";
  } else if (playerChoice === 2 && computerChoice === 1) {
    // SCISSORS VS PAPER = SCISSORS WIN
    result = "Player Wins!";
  } else if (playerChoice === 2 && computerChoice === 2) {
    // SCISSORS VS SCISSORS = DRAW
    result = "Draw!";
  }

  // Convert player choice back to a string
  if (playerChoice === 0) {
    playerChoice = "rock";
  } else if (playerChoice === 1) {
    playerChoice = "paper";
  } else if (playerChoice === 2) {
    playerChoice = "scissors";
  }

  // Convert computer choice back to a string
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else if (computerChoice === 2) {
    computerChoice = "scissors";
  }

  console.log("the answer to STRETCH 1 is  " + "playerChoice: ", playerChoice);
  console.log(
    "the answer to STRETCH 1 is  " + "computerChoice: ",
    computerChoice
  );
  console.log("the answer to STRETCH 1 is  " + result);
}

rps();
