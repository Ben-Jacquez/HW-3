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

function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters woudld you like your password to be?")
  if (passwordLength < 8 || passwordLength > 128);
  return 
}

var passwordLowercase = confirm("Would you like to include lowercase letters?");
var passwordUppercase = confirm("Would you like to include uppercase letters?")
var passwordNumbers = confirm("Would you like to include numbers?");
var passwordSpecial = confirm("Would you like to include special characters?")
var passwordCharacters = "";

if (passwordLowercase) {
  passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
}
if (passwordUppercase) {
  passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (passwordNumbers) {
  passwordCharacters += "0123456789";
}
if (passwordSpecial) {
  passwordCharacters += "~!@#$%^&*?";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
