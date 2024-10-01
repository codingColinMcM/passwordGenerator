// CONSTANTS
const CEILINGLEN = 128;
const FLOORLEN = 8;

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Character sets
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const intChars = "0123456789";
const specialChars = "~!@$%^&*_-+=`|(){}[]:;<>,.?/'\"";

// Function to prompt for password length
function getPasswordLength() {
    let length;
    while (true) {
        length = parseInt(window.prompt(`How many characters in your password (between ${FLOORLEN} and ${CEILINGLEN}):`), 10);
        if (length >= FLOORLEN && length <= CEILINGLEN) break;
        alert(`Please enter a number between ${FLOORLEN} and ${CEILINGLEN}.`);
    }
    return length;
}

// Function to get user criteria for password
function getCriteria() {
    const criteria = {
        lower: confirm('Would you like lower case characters?'),
        upper: confirm('Would you like upper case characters?'),
        int: confirm('Would you like integers?'),
        special: confirm('Would you like special characters?')
    };

    if (!criteria.lower && !criteria.upper && !criteria.int && !criteria.special) {
        alert('You must select at least one character type.');
        return getCriteria();
    }

    return criteria;
}

// Function to generate the password
function generatePassword(length, criteria) {
    let characterPool = '';

    if (criteria.lower) characterPool += lowerChars;
    if (criteria.upper) characterPool += upperChars;
    if (criteria.int) characterPool += intChars;
    if (criteria.special) characterPool += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    return password;
}

// Function to write password to the #password input
function writePassword() {
    const passwordLength = getPasswordLength();
    const criteria = getCriteria();
    const finalPassword = generatePassword(passwordLength, criteria);

    document.querySelector("#password").value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
