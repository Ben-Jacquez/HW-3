var generateBtn = document.querySelector("#generate");

// create variables to hold the options we need: lowercase, uppercase, numeric and special characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberic = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '?']

// create an empty array that will hold the users selected characters
var possibleCharacters = []
var passwordArray = []

function passwordOptions() {
  let characters = parseInt(
    prompt("How many characters would you like your password to be?")
  );

// check the users input and confirm they put in a numeric value that is between 8 and 128, & write a function that validates the user input
  if (characters >= 8 && characters <= 128) {
    let passwordLowercase = confirm("Would you like to include lowercase letters?");
    let passwordUppercase = confirm("Would you like to include uppercase letters?");
    let passwordNumbers = confirm("Would you like to include numbers?");
    let passwordSpecial = confirm("Would you like to include special characters?");

    let options = {
      strength: characters,
      passwordLowercase: lowercase,
      passwordUppercase: uppercase,
      passwordNumbers: numbers,
      passwordSpecial: specials,
    };
    return options;

    } else {
      alert("Must be between 8 and 128 characters")
    }
  }

  function generatePasswordz() {
    let userPasswordChoices = passwordOptions()
    let userChoice = "";
    let password = "";

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
      userChoice =+ special.join("");
    }
  }

// after validation create variables for character selections


  return "Generated Password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// upon game start prompt the users number of characters, then hold that in a variable
// var chars = []



//function getInput() {
// chars = prompt("How many characters would you like in your password?")
//}





// validate that at least one option was selected
//if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
//  alert("You need to select at least one type of character.");
//return generatePassword()  
//}

// after validation is complete start pushing the selected characters into possible chars array

//if (passwordLowercase) {
// passwordCharacters.contact(passwordLowercase)
//}
//if (passwordUppercase) {
// passwordCharacters.contact(passwordUppercase);
//}
//if (passwordNumbers) {
//  passwordCharacters.contact(passwordNumbers);
//}
//if (passwordSpecial) {
//  passwordCharacters.contact(passwordSpecial);
//}

// create a random number

// loop through passwordCharacters and select a random character from the possibleCharacters array based on how many characters they entered into the prompt

// push() the randomly generated character to an empty array called passwordArray

// return passwordArray.join()

