// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria of the password
var traits = {
  ln:0, // length of password
  lc:0, // lowercase characters
  uc:0, // uppercase characters
  n:0, // numbers
  sc:0 // special characters
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
function lowercaseprompt() {
  var prompt2 = prompt("Would you like to include lowercase characters in your password?", "");

  if  (prompt2 == null) { // If they click cancel
    alert("Cancelled");
  }
  else if (prompt2 == "yes" || prompt2 == "Yes") {
    traits.lc = 1; // true
    uppercaseprompt();
  }
  else if (prompt2 == "no" || prompt2 == "No") {
    traits.lc = 0; // false. though this is the default, having it set to 0 here allows for the process to be repeated without refreshing
    uppercaseprompt();
  }
  else {
    alert("Please enter yes or no");
    lowercaseprompt();
  }
}

// Prompt 3: Uppercase Prompt
function uppercaseprompt() {
  var prompt3 = prompt("Would you like to include uppercase characters in your password?", "");

  if  (prompt3 == null) { // If they click cancel
    alert("Cancelled");
  }
  else if (prompt3 == "yes" || prompt3 == "Yes") {
    traits.uc = 1; // true
    numericprompt();
  }
  else if (prompt3 == "no" || prompt3 == "No") {
    traits.uc = 0; // false
    numericprompt();
  }
  else {
    alert("Please enter yes or no");
    uppercaseprompt();
  }
}

// Prompt 4: Numeric Prompt
function numericprompt() {
  var prompt4 = prompt("Would you like to include numbers in your password?", "");

  if  (prompt4 == null) { // If they click cancel
    alert("Cancelled");
  }
  else if (prompt4 == "yes" || prompt4 == "Yes") {
    traits.n = 1; // true
    specialprompt();
  }
  else if (prompt4 == "no" || prompt4 == "No") {
    traits.n = 0; // false
    specialprompt();
  }
  else {
    alert("Please enter yes or no");
    numericprompt();
  }
}

// Prompt 5: Special Characters Prompt
function specialprompt() {
  var prompt5 = prompt("Would you like to include special characters in your password?", "");

  if  (prompt5 == null) { // If they click cancel
    alert("Cancelled");
  }
  else if (prompt5 == "yes" || prompt5 == "Yes") {
    traits.sc = 1; // true
    validation();
  }
  else if (prompt5 == "no" || prompt5 == "No") {
    traits.sc = 0; // false
    validation();
  }
  else {
    alert("Please enter yes or no");
    specialprompt();
  }
}

function validation() {
  if (traits.lc == 0 && traits.uc == 0 && traits.n == 0 && traits.sc == 0) {
    alert("Your password must contain at least one type of character. Please try again.");
    lowercaseprompt();
  }
  else {
    alert("yay!");
  }
}
