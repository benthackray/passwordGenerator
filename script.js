// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // I needed to create a generatePassword function!**
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// **and so I did
function generatePassword() {
  // a blank array that our criteria will be added to
  var char = []
// the parseInt makes sure that the submission only reads as an intiger
  var x = parseInt(prompt("How many characters would you like in your password? (Please choose a number between 8 and 128"))
  // for the non number submissions
  if (!x) {
    alert("This needs a value")
    return
  }
  // if the number is not correct
  else if (x < 7 || x > 128) {
    alert("Number of characters must be between 8 and 128")
    return
  }
// lowercase letters
  var lower = confirm("Will the password contain lowercase letters?")
  if (lower) {
    // I learned after I completed this part that I could have used push or concat to combine arrays
    char.splice(0, 0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  }
  console.log(char);
// UPPERCASE LETTERS
  var upper = confirm("Will the password contain uppercase letters?")
  if (upper) {
    // there's a command that will turn lowercase to upper, but this works too
    char.splice(0, 0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  }
  console.log(char);
// numb3rs
  var number = confirm("Will the password contain numbers?")
  if (number) {
    char.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
  }
  console.log(char);
// $ymbols
  var symbol = confirm("Will the password contain special characters?")
  if (symbol) {
    char.splice(0, 0, "!", "@", "#", "$", "%", "^", "&", "*", "(", ")")
  }
  console.log(char);
// If they don't choose any criteria
  if (char.length == 0){
    alert("Must select criteria")
    return
  }

// where we store the characters of our password
  var selection = []
// where the magic happens aka the password generation
  for (var i = 0; i < x; i++) {
    // generates a random number to be used with the char array
    var randomChar = Math.floor(Math.random() * char.length)
    // this will keep the first character, then add onto it until it meets the character length set up by the user
    var selection = selection + char[randomChar];
    
  }
  console.log(selection)
  // once our password is generated, it goes back to the writePassword function 
  return selection;

}