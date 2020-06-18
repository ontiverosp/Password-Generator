// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var passLower;
var passUpper;
var passNum;
var passSpcl;
// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  // var password = generatePassword();
  // Asks for the criteria for pssword
  var passwordText = document.querySelector("#password");
  passLength = prompt("How many characters should your password be?");
  passLower = confirm("Should it include lower case letters?");
  passUpper = confirm("Should it include upper case letters?");
  passNum = confirm("Should it include numbers?");
  passSpcl = confirm("Should it include special characters?");

  console.log(passLength);
  console.log(passLower);
  console.log(passUpper);
  console.log(passNum);
  console.log(passSpcl);

  alert("You have chosen a password that is " + passLength + " characters long. Lower case: " + passLower + " Upper case: " + passUpper + " Numbers: " + passNum + " Special characters: " + passSpcl);
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
