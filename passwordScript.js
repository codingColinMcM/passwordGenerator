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

      alert("Please reenter an integer following the minimum " + FLOORLEN + " chars - maximum " + CEILINGLEN + " chars length password guidlines.")

    } else {
        alert("Please enter a number greater than or equal to " + FLOORLEN + " and less than or equal to " + CEILINGLEN)
    }
    passwordLen = window.prompt("How many characters in your password: ");

    correctlyEntered = false;
    
  }
  
//   console.log(passwordLen)

  // Prompting user with series of questions to get desired criteria 

  var desireLower = false;
  var desireUpper = false;
  var desireInt = false;
  var desireSpecial = false;
  var noCriteria = false;

  while ((desireLower == false) && (desireUpper == false) && (desireInt == false) && (desireSpecial == false)) {
    
    if(noCriteria == true) {
        alert('Please click "OK" to at least one of the following criteria.')
    }

    if (confirm('Would you like lower case characters? Click "OK" if you do.') == true){
        desireLower = true;
    }

    if (confirm('Would you like upper case characters? Click "OK" if you do.') == true){
        desireUpper = true;
    }

    if (confirm('Would you like integers? Click "OK" if you do.') == true){
        desireInt = true;
    }

    if (confirm('Would you like special characters? Click "OK" if you do.') == true) {
        desireSpecial = true;
    }
    noCriteria = true;
  }

//   console.log(desireLower);
//   console.log(desireUpper);
//   console.log(desireInt);
//   console.log(desireSpecial);


  
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
  var lowerUpperSpecial = lowerChars.concat(upperChars.concat(specialChars));

  var allChars = lowerChars.concat(upperChars.concat(intChars.concat(specialChars)));


    function makePassword(arr, length){
  
        var result = ''; 
        for ( var i = 0; i < length; i++ ) {
        result += arr[Math.floor(Math.random() * arr.length)];
        }
        return result
    }

//   The following if statements are disgusting, I know. If there is a more efficient way of doing this
//   please let me know the feedback on Canvas.



    // var inLower = false;
    // var inUpper = false;
    // var inInt = false;
    // var inSpecial = false;

    var finalPassword = "";

    if (desireLower == true) {

        // inLower = true;

        if (desireUpper == true) {

            // inUpper = true;

            if (desireInt == true) {

                // inInt = true;

                if (desireSpecial == true) {

                    // inSpecial = true;

                    finalPassword = makePassword(allChars, passwordLen);

                } else {
                    finalPassword = makePassword(lowerUpperInt, passwordLen);
                } 

            } else if (desireSpecial == true) {
                
                // inSpecial = true;
                finalPassword = makePassword(lowerUpperSpecial, passwordLen);
        
            } else {
                finalPassword = makePassword(lowerUpper, passwordLen);
            }

        } else if (desireInt == true) {

            // inInt = true;
            if (desireSpecial == true) {

                // inSpecial = true;
                finalPassword = makePassword(lowerIntSpecial, passwordLen);

            }

        } else if (desireSpecial == true) {

            finalPassword = makePassword(lowerSpecial, passwordLen);

        } else {
            finalPassword = makePassword(lowerChars, passwordLen);
        }
    } else if (desireUpper == true) {

        if (desireInt == true) {

            if (desireSpecial == true) {
                finalPassword = makePassword(upperIntSpecial, passwordLen);
            } else {
                finalPassword = makePassword(upperInt, passwordLen);
            }

        } else if (desireSpecial == true) {

            finalPassword = makePassword(upperspecial, passwordLen);

        } else {

            finalPassword = makePassword(upperChars, passwordLen);
            
        }
    } else if (desireInt == true) {

        if (desireSpecial == true) {
            finalPassword = makePassword(intSpecial, passwordLen);
        } else {
            finalPassword = makePassword(intChars, passwordLen);
        }

    } else{

        finalPassword = makePassword(specialChars, passwordLen)
        
    }



//   console.log("Number of specials is: " + specialChars.length)
//   console.log(allChars.length);


//   console.log(finalPassword);
  passwordText.value = finalPassword;
//   document.getElementById("password").innerHTML = "Is this working?";

  return finalPassword;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
