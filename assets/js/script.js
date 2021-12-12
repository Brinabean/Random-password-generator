// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//generating the length of the password
var passwordlength = function() {
  var plength = "";

  while (plength === "" || plength === null || plength < 8 || plength > 128) {
    plength = prompt("How long would you like your password? Please type in a number from 8 to 128.");
  }

  plength = parseInt(plength);

  console.log("The password length is " + plength);
  return plength;
};

var charactertypes = function() {
  //picking which character attributes they want in thr password
  var lowcase = prompt("Would you like to have lowercase letters in your password? Please type in 'yes' or 'no'");
  var lcstring = '';
  lowcase = lowcase.toLowerCase();
  if (lowcase === "" || lowcase === null) {
    lowcase = "no";
  }
  if (lowcase == "yes") {
    //create loswercase string
    lcstring = 'abcdefghijklmnopqrstuvwxyz';
  }

  var upcase = prompt("Would you like to have uppercase letters in your password? Please type in 'yes' or 'no'");
  var upstring = '';
  upcase = upcase.toLowerCase();
  if (upcase === "" || upcase === null) {
    upcase = "no";
  }
  if (upcase == "yes") {
    upstring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  var addnumerics = prompt("Would you like to have numbers in your password? Please type in 'yes' or 'no'");
  var numstring = '';
  addnumerics = addnumerics.toLowerCase();
  if (addnumerics == "" || addnumerics == null) {
    addnumerics = "no";
  }
  if (addnumerics == "yes") {
    numstring = '0123456789';
  }

  var specialchar = prompt("Would you like to have special characters in your password? Please type in 'yes' or 'no'");
  var spestring = '';
  specialchar = specialchar.toLowerCase();
  if (specialchar == "" || specialchar == null) {
    specialchar = "no";
  }
  if (specialchar == "yes") {
    spestring = '!@#$%^&*';
  }
  
  if (lowcase == "no" && upcase == "no" && addnumerics == "no" && specialchar == "no") {
    window.alert("Please choose to add at least one of the options in order to create a secure password.");
    charactertypes();
  }
};


var generatePassword = function() {

}

// Write password to the #password input
function writePassword() {
  passwordlength();

  charactertypes();
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
