// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var plength = "";
var spestring = '';
var lcstring = '';
var upstring = '';
var numstring = '';

//generating the length of the password
var passwordlength = function() {
  
  while (plength === "" || plength === null || plength < 8 || plength > 128) {
    plength = prompt("How long would you like your password? Please type in a number from 8 to 128.");
  }

  plength = parseInt(plength);



  console.log("The password length is " + plength);
  return plength;
};

var pickcharactertypes = function() {
  //picking which character attributes they want in thr password
  var lowcase = prompt("Would you like to have lowercase letters in your password? Please type in 'yes' or 'no'.");
  
  lowcase = lowcase.toLowerCase();
  if (lowcase == "yes") {
    //create loswercase string
    lcstring = 'abcdefghijklmnopqrstuvwxyz';
  } else {
    lcstring = '';
  }

  var upcase = prompt("Would you like to have uppercase letters in your password? Please type in 'yes' or 'no'.");
  
  upcase = upcase.toLowerCase();
  if (upcase == "yes") {
    upstring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    upstring = '';
  }

  var addnumerics = prompt("Would you like to have numbers in your password? Please type in 'yes' or 'no'.");
  
  addnumerics = addnumerics.toLowerCase();
  if (addnumerics == "yes") {
    numstring = '0123456789';
  } else {
    numstring = '';
  }

  var specialchar = prompt("Would you like to have special characters in your password? Please type in 'yes' or 'no'.");
  
  specialchar = specialchar.toLowerCase();
  if (specialchar == "yes") {
    spestring = '!@#$%^&*';
  } else {
    spestring = '';
  }
  
  if (lcstring == '' && upstring == '' && numstring == '' && spestring == '') {
    window.alert("Please choose to add at least one of the options to create a secure password.");
    pickcharactertypes();
  }

};


var generatePassword = function() {
  var pwstring = lcstring + upstring + numstring + spestring;
  var passwordlength = plength - 1;
  var password = "";

  for (i = 0; i <= passwordlength; i++) {
    var randomnumber = Math.floor(Math.random() * pwstring.length);
    password += pwstring.substring(randomnumber, randomnumber +1);
  }
  
  return password;

}

// Write password to the #password input
function writePassword() {
  passwordlength();
  pickcharactertypes();
  generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
