// Assignment Code

var generateBtn = document.querySelector("#generate");
// Declaring variables
var passLength;
var passLower;
var passUpper;
var passNum;
var passSpcl;
alphabetL = 'abcdefghijklmnopqrstuvwxyz'.split('');
alphabetU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
num = '1234567890'.split('');
spcl = '!%&,*+_/<>?~'.split('');


// Write password to the #password input
function writePassword() {
  // Asks for the criteria for pssword

  passLength = prompt("How many characters should your password be?")
  if (isNaN(passLength) === true || passLength < 8 || passLength > 128) {
    alert("Please choose a number between 8 and 128 characters long");
    return;
  }
  passLower = confirm("Should it include lower case letters?");
  passUpper = confirm("Should it include upper case letters?");
  passNum = confirm("Should it include numbers?");
  passSpcl = confirm("Should it include special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert("You have chosen a password that is " + passLength + " characters long. Lower case: " + passLower + " Upper case: " + passUpper + " Numbers: " + passNum + " Special characters: " + passSpcl);
  passwordText.value = password;
}

function generatePassword() {
  var characterlist = [];
  var li = 0;
  if (passUpper === true) {
    for (i = 0; i < alphabetU.length; i++) {
      
      characterlist[li] = alphabetU[i];
      li++;
    }
  }
  if (passLower === true) {
    for (i = 0; i < alphabetL.length; i++) {

      characterlist[li] = alphabetL[i];
      li++;
    }
  }
  if (passNum === true) {
    for (i = 0; i < num.length; i++) {
    
      characterlist[li] = num[i];
      li++;
    }
  }
  if (passSpcl === true) {
    for (i = 0; i < spcl.length; i++) {
      
      characterlist[li] = spcl[i];
      li++;
    }
  }
  var pass = ""
  for (var i = 0; i < passLength; i ++) {
    pass += characterlist[Math.floor(Math.random() * characterlist.length)]
  }
  return pass;
}


// return passTemp;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

