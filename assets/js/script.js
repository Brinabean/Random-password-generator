// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordlength = function() {
  var plength = "";

  while (plength === "" || plength === null || plength < 8 || plength > 128) {
    plength = prompt("How long would you like your password? Please type in any number from 8 to 128.");
  }

  plength = parseInt(plength);

  console.log("The password length is " + plength);
  return plength;
};

// Write password to the #password input
function writePassword() {
  passwordlength();
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
