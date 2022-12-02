// create variables to hold the options we need: lowercase, uppercase, numeric and special characters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '?']

// create an empty array that will hold the users selected characters
var passwordCharacters = []
var passwordArray = []

// upon game start prompt the users number of characters, then hold that in a variable
var numChars = prompt("How many characters would you like in your password?")

// check the users input and confirm they put in a numeric value that is between 8 and 128, 
// write a function that validates the user input

function validateUserInput(chars) {
// parseInt(chars)
if (chars < 8 || chars > 128) {
  return null
}
}

// after validation create variables for character selections

var passwordLowercase = confirm("Would you like to include lowercase letters?");
var passwordUppercase = confirm("Would you like to include uppercase letters?")
var passwordNumbers = confirm("Would you like to include numbers?");
var passwordSpecial = confirm("Would you like to include special characters?")

// validate that at least one option was selected

if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
  alert("You need to select at least one type of character.");
return generatePassword()  
}

// after validation is complete start pushing the selected characters into possible chars array

if (passwordLowercase) {
 passwordCharacters.contact(passwordLowercase)
}
if (passwordUppercase) {
 passwordCharacters.contact(passwordUppercase);
}
if (passwordNumbers) {
  passwordCharacters.contact(passwordNumbers);
}
if (passwordSpecial) {
  passwordCharacters.contact(passwordSpecial);
}

// create a random number

// loop through passwordCharacters and select a random character from the possibleCharacters array based on how many characters they entered into the prompt

// push() the randomly generated character to an empty array called passwordArray

// return passwordArray.join()

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
