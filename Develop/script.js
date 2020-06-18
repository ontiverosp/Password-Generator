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
spcl = '@%+?!#$^&*/:{}[]()~,'.split('');


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
  console.log(passUpper)
  passNum = confirm("Should it include numbers?");
  passSpcl = confirm("Should it include special characters?");

  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  alert("You have chosen a password that is " + passLength + " characters long. Lower case: " + passLower + " Upper case: " + passUpper + " Numbers: " + passNum + " Special characters: " + passSpcl);
  // passwordText.value = password;
}
// var passChoices = {
//   passlength: passLength,
//   passLower: passLower,
//   passUpper: passUpper,
//   passNum: passNum,
//   passSpcl: passSpcl
// }
// // return passChoice;

function generatePassword() {
  var characterlist = "";
  if (passUpper === true) {
    for (i=0 ; i < alphabetU.length ; i++){
      li ++;
      characterlist.push(alphabetU[i])
      console.log(characterlist)
    }
    console.log("it worked");
  }
  // if (passLower === true) {
  //   for (i=0 ; i < alphabetU.length ; i++){
  //     li ++;
  //     characterlist[li]=alphabetL[i];
  //   }
  }


  // return passTemp;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//