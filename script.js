// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {

  // Defines characters that i can use in my password 
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  // Prompts for password length
  var passwordLength = prompt("Enter password length (between 8 and 16):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (passwordLength < 8 || passwordLength > 16 || isNaN(passwordLength)) {
    alert("Enter a valid number between 8 and 16.");
    return;
  }

  //Propmt users if they want to add a character type
  var addLowercase = confirm("Include lowercase characters?");
  var addUppercase = confirm("Include uppercase characters?");
  var addNumeric = confirm("Include numeric characters?");
  var addSpecial = confirm("Include special characters?");

  //If you dont pick anything this will tell you to add something
  if (!addLowercase && !addUppercase && !addNumeric && !addSpecial) {
    alert("You need to add at least one thing.");
    return;
  }

  //Choices for the string for the password 
  var selectedChars = "";
  if (addLowercase) selectedChars += "abcdefghijklmnopqrstuvwxyz";
  if (addUppercase) selectedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (addNumeric) selectedChars += "0123456789";
  if (addSpecial) selectedChars += "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var password = generatePassword(selectedChars, passwordLength);
  passwordText.value = password;

}

//Generates random password with sting choices
function generatePassword(chars, passwordLength) {
  var password = "";

// It starts with i = 0 and the loop continues until i reaches passwordLength 8
  for (var i = 0; i < passwordLength; i++) {

// Math.random() returns a random number between 0 and 1
// Then scaling the random number to fit within the range from 0 to chars.length
    var randomNumber = Math.random() * chars.length;

// += used to append to password
    password += chars.charAt(randomNumber);
  }

 return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


