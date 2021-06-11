// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //checks to see if a value is a capital letter
  function isUpperCase(value){
    if(value < 65 || value > 90) return false;
    else return true;
  }

  //checks to see if a value is a lowercase letter
  function isLowerCase(value){
    if(value < 97 || value > 122) return false;
    else return true;
  }

  //checks to see if a value is alphabetical
  function isAlphabetical(value){
    if(isUpperCase(value) || isLowerCase(value)) return true;
    else return false;
  }

  const latinAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z'];
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //check for errors - return false if there is no alphabet!
    if(!alphabet) return false;

    //check for errors - return false if the alphabet isn't exactly 26 letters
    if(alphabet.length !== 26) return false;
    
    //check for errors - return false if the alphabet is not made up of unique characters
   let alphabetArray = alphabet.split("");
    for(let i = 0; i < 26; i++){
      for(let j = i+1; j < 25; j++){
        if(alphabet[i] === alphabet[j]) return false;
      }
    }; 
   
    //create the arrays that will be needed to create the output string
    let inputArray = input.split("");
    let outputArray = [];

    //convert the alphabet passed in into a workable cypher
    //depending on whether encoding or decoding, change whether latin alphabet or substitution cypher are the key

      //decoding script
    let alphabetCypher = {};
    if(encode === false) latinAlphabet.forEach((letter, i) => alphabetCypher[alphabet[i]] = letter);

      //encoding script
    else latinAlphabet.forEach((letter, i) => alphabetCypher[letter] = alphabet[i]);
    
    //parse through inputArray to push values properly to the outputArray
    inputArray.forEach((value) => {
      if(value === " " || value === "") outputArray.push(" ");
      else if(!isAlphabetical(value)) outputArray.push(alphabetCypher[value]);
      else if(isUpperCase(value)) outputArray.push(alphabetCypher[value].toLowerCase());
      else outputArray.push(alphabetCypher[value]);
    });
    
    //convert the outputArray into a string and return it
    return outputArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
