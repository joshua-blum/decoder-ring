// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function isAlphanumeric(value){
    if(value < 97 || value > 122) return false;
    else return true;
  }
  function caesar(input, shift, encode = true) {
    // your solution code here
    //return false as early as possible
    if(!input || !shift) return false;
    if(shift === 0 || shift > 25 || shift < -25) return false;

    if (encode === false) shift = -shift;
    let outputArray = [];

    manipulationArray = input.split("");
    console.log("Here is the input split into an array: ==>" + manipulationArray + "<==");
    manipulationArray.forEach((character) => {
      let charValue = character.toLowerCase().charCodeAt(0);
      console.log("here is the character: " + character);
      console.log("and here is the charCode: " + charValue);
      let finalShift = 0;
      if(isAlphanumeric(charValue)){
        let shiftedValue = charValue + shift;
        if(!isAlphanumeric(shiftedValue)) {
          if(shiftedValue < 97) finalShift = 26;
          else finalShift = -26;
        };
        outputArray.push(String.fromCharCode(shiftedValue + finalShift));
        console.log(outputArray);
      } else outputArray.push(character);
    });
    return outputArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
