// create variables to hold the options we need: lowercase, uppercase, numeric and special characters

// create an empty array that will hold the users selected characters

// upon game start prompt the users number of characters, then hold that in a variable
// var numChars = prompt("How many characters would you like in your password?")

// check the users input and confirm they put in a numeric value that is between 8 and 128, 

// write function that validates the user input

// function validateUserInput(chars) {
// if (chars < 8 || chars > 128) {
//  return null
// }
// }

// after validation create variables for character selections

// var specialNums = confirm("Would you like special characters")





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
