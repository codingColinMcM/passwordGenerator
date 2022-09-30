// CONSTANTS

// Maximum number of characters password can be is CEILINGLEN set to 126
// Minimum number of characters password can be is FLOORLEN set to 8
var CEILINGLEN = 126;
var FLOORLEN = 8;

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLen = 0;
  var correctlyEntered = true;

  
  while ((FLOORLEN > passwordLen) || (passwordLen > CEILINGLEN)) {

    if (correctlyEntered == false) {

      console.log("Please reenter an integer following the minimum - ")
      console.log("maximum length password guidlines.")

    }

    console.log("Please enter a number greater than or equal to " + FLOORLEN)
    console.log("and less than or equal to " + CEILINGLEN)
    passwordLen = window.prompt("How many characters in your password: ");

    correctlyEntered = false;
    
  }
  
  console.log(passwordLen)
  
  // Generate passwords based on criteria selected by user above

  // Createing seperate arrays for providing characters that follow the
  // user's requested critia. (If there are libraries that provide similar
  // fuctionality as these arrays, I'm gonna be sad )': )

  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChars =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var intChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "(", ")", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/", "'", '"'];
  
  var lowerUpper = lowerChars.concat(upperChars);
  var lowerInt = lowerChars.concat(intChars);
  var lowerSpecial = lowerChars.concat(specialChars);

  var upperInt = upperChars.concat(intChars);
  var upperspecial = upperChars.concat(specialChars);
  var intSpecial = intChars.concat(specialChars);

  var lowerUpperInt = lowerChars.concat(upperChars.concat(intChars));
  var lowerIntSpecial = lowerChars.concat(intChars.concat(specialChars));
  var upperIntSpecial = upperChars.concat(intChars.concat(specialChars));

  var allChars = lowerChars.concat(upperChars.concat(intChars.concat(specialChars)));


  function makePassword(arr, length){
  
    var result = ''; 
    for ( var i = 0; i < length; i++ ) {
      result += arr[Math.floor(Math.random() * arr.length)];
    }

    return result
  }

  var finalPassword = makePassword(allChars, passwordLen);

  console.log("Number of specials is: " + specialChars.length)
  console.log(allChars.length);


  console.log(finalPassword);
  passwordText.value = password;

  return finalPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
