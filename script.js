// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log("H A N G M A N");
let winCount = 0;
let loseCount = 0;

while (true) {
  const words = ["python", "java", "swift", "javascript"];
  let word = words[Math.floor(Math.random() * 4)]
  let string = "";
  for (x in word) {
    string += "-";
  }
  let attempts = 8;

  let success = "";
  let commandType = false;
  let select;
  const commands = ["play", "results", "exit"];

  
  while (!commandType) {
  select = input("Type \"play\" to play the game, \"results\" to show the scoreboard, and \"exit\" to quit: ");
  if (commands.includes(select)) {
    commandType = true;
    }
  }

  if (select.localeCompare("exit") == 0) {
    break;
  } else if (select.localeCompare("play") == 0) {
      console.log();
      while (attempts > 0 && word.localeCompare(string) != 0) {
        console.log(string);
        let letter = input("Input a letter: ");
        
        if (letter.length != 1) {
          console.log("Please, input a single letter.\n");
          continue;
        }
      
        if (!/[a-z]/.test(letter.charAt())) {
          console.log("Please, enter a lowercase letter from the English alphabet.\n");
          continue;
        }
  
      let arr = string.split("");
      if (word.includes(letter) && !success.includes(letter)) {
        for (x in word) {
          if (word[x] == letter) {
            arr[x] = letter;
          } 
        }
        success += letter;
        string = arr.join("");
        console.log();
      } else if (success.includes(letter)){
        console.log("You've already guessed this letter.\n");
      } else {
        console.log("That letter doesn't appear in the word.\n");
        attempts--;
    }
    success += letter;
    }

    if (word.localeCompare(string) == 0) {
      console.log("You guessed the word " + string + "!");
      console.log("You survived!");
      winCount++;
    } else {
      console.log("You lost!");
      loseCount++;
    }
    } else {
      console.log("You won: " + winCount + " times.");
      console.log("You lost: " + loseCount + " times.");
    }  
}