// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordLength = 8;
  
  var password = generatePassword(chars, passwordLength); 

  // This displays password
  passwordText.value = password; 
}

// Function to generate a random password
function generatePassword(chars, passwordLength){

  var password = "";

// It starts with i = 0 and the loop continues until i reaches passwordLength 8
  for (var i = 0; i < passwordLength; i++) {


// Math.random() returns a random number between 0 and 1
// Then scaling the random number to fit within the range from 0 to chars.length

    var randomNumber = Math.random() * chars.length;

// += used to append to password
//
    password += chars.charAt(randomNumber);
  }

 return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


