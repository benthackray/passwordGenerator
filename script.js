// Assignment Code
var generateBtn = document.querySelector("#generate");

// var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// var char

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var char = []

  var x = parseInt(prompt("How many characters would you like in your password? (Please choose a number between 8 and 125"))
  if (!x){
    alert("This needs a value")
    return
  }
  else if (x<7 || x>125){
    alert("Number of characters must be between 8 and 125")
    return
  }

  var lower = confirm("Will the password contain lowercase letters?")
  if (lower) {
    char.splice(0, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }
  console.log(char);

  var upper = confirm("Will the password contain uppercase letters?")
  if (upper) {
    char.splice(0, 0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  console.log(char);
  
  var number = confirm("Will the password contain numbers?")
  if (number) {
    char.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
  }
  console.log(char);

  var symbol = confirm("Will the password contain special characters?")
  if (symbol) {
    char.splice(0, 0, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")")
  }
  console.log(char);

  

}