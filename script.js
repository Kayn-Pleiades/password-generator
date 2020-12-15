// Assignment Code
var generateBtn = document.querySelector("#generate");

var traits = {
  ln:0, //length of password
  lc:0, //lowercase characters
  uc:0 //uppercase characters
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", lengthprompt);

// Prompt 1: Length Prompt
function lengthprompt() {
  var prompt1 = prompt("Between 8 and 128 characters, how long would you like your password to be?", "");
  var passwordlength = parseInt(prompt1); // Get number from the string

  if  (prompt1 == null) { // If they click cancel
    alert("Cancelled");
  }
  else if (passwordlength >= 8 && passwordlength <= 128) { // If they enter a number in the range
    traits.ln = passwordlength;
    lowercaseprompt();
  }
  else if (passwordlength < 8 || passwordlength > 128) { // If they enter a number outside of the range
    alert("Please enter a number that is between 8 and 128"); // Tell them what they did wrong
    lengthprompt(); // Call Function again
  }
  else { // If they enter anything else, such as text
    alert("I'm sorry, something went wrong. Please try again."); // Tell them it didn't work
    lengthprompt(); // Call Function again
  }
}

// Prompt 2: Lowercase Prompt
  function lowercaseprompt(){
    var prompt2 = prompt("Next Prompt goes here", "");
  }
