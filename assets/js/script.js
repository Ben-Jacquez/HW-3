const generateBtn = document.querySelector("#generate");

// create variables to hold the options we need: lowercase, uppercase, numeric and special characters
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '?'];

// create an empty array that will hold the users selected characters
// var possibleCharacters = []
// var passwordArray = []

// upon start prompt the users number of characters, then hold that in a variable
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
    if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordNumbers) {
    alert("You must select at least one type of character.");
    }
// after validation create variables for character selections
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
// after validation is complete start pushing the selected characters into possible chars array
// after validation create variables for character selections
function generatePassword() {
  console.log("test");
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
  userChoice =+ specials.join("");
  }

//  For (let i = 0; i < userPasswordChoices.strength; i++) {
//  let random = math.floor(math.random() * userChoice.length);
//  password += userChoice.charAt(random);
//}

//return generatePassword()  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//}


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