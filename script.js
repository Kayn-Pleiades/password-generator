// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordprompt);

// Prompt 1
function passwordprompt() {
  var prompt1 = prompt("Between 8 and 128 characters, how long would you like your password to be?", " ");
  var passwordlength = parseInt(prompt1);

  if  (prompt1 == null || prompt1 == "") {
    alert("Cancelled");
  }
  else if (passwordlength >= 8 && passwordlength <= 128) {
    alert("Thank You");
  }
  else if (passwordlength < 8 || passwordlength > 128) {
    alert("Please enter a number that is between 8 and 128");
  }
  else {
    alert("I'm sorry, please try again.");
  }
}