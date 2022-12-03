var generateBtn = document.querySelector("#generate");

// create variables to hold the options we need: lowercase, uppercase, numeric and special characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '?'];

// upon start prompt the users number of characters, then hold that in a variable
function passwordOptions() {
  let characters = parseInt(
    prompt("How many characters would you like your password to be?")
  );

// check the users input and confirm they put in a numeric value that is between 8 and 128, & write a function that validates the user input
if (characters >= 8 && characters <= 128) {
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumbers = confirm("Would you like to include numbers?");
  var passwordSpecial = confirm("Would you like to include special characters?");
// Confirm the user selected at least one character option for the password
  if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
  alert("You must select at least one type of character.");
}
  let options = {
    strength: characters,
    passwordLowercase: passwordLowercase,
    passwordUppercase: passwordUppercase,
    passwordNumbers: passwordNumbers,
    passwordSpecial: passwordSpecial,
  };
  return options;

} else {
  alert("Must be between 8 and 128 characters")
}
}
  
function generatePassword() {
// after validation create variables for character selections
  let userPasswordChoices = passwordOptions();
  let userChoice = "";
  let password = "";

// validate that at least one option was selected
  if (userPasswordChoices.passwordLowercase) {
      userChoice += lowercase.join("");
  }
  if (userPasswordChoices.passwordUppercase) {
    userChoice += uppercase.join("");
  }
  if (userPasswordChoices.passwordNumbers) {
    userChoice += numbers.join("");
  }
  if (userPasswordChoices.passwordSpecial) {
 userChoice += specials.join("");
  }

// loop through passwordCharacters and select a random character from the possibleCharacters array based on how many characters they entered into the prompt
  for (let i = 0; i < userPasswordChoices.strength; i++) {
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random);
  }
  return password;
}
  
// Write password to the #password input
function writePassword() {
  
  var finalPassword = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);