// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function isAlphabetical(value){
    if(value < 97 || value > 122) return false;
    else return true;
  }

  const polybiusSquare = {
    " ": " ",
    "a":'11',
    "b":'21',
    "c":'31',
    "d":'41',
    "e":'51',
    "f":'12',
    "g":'22',
    "h":'32',
    "i":'42',
    "j":'42',
    "k":'52',
    "l":'13',
    "m":'23',
    "n":'33',
    "o":'43',
    "p":'53',
    "q": '14',
    "r":'24',
    "s":'34',
    "t":'44',
    "u":'54',
    "v":'15',
    "w":'25',
    "x":'35',
    "y":'45',
    "z":'55'
  }
  
  const polybiusSquareKeys = Object.keys(polybiusSquare);
  const polybiusSquareValues = Object.values(polybiusSquare);

  function polybius(input, encode = true) {
    // your solution code here
    if(!input) return false;
    let outputArray = [];
    let manipulationArray = input.split("");

    //decoding code
    if(encode === false){
      //error handling - check if there are any letters in the string
      let confirmLetterString = manipulationArray.some((value) => isAlphabetical(value));
      if(confirmLetterString) return false;
      //error handling - check if there are an odd number of numbers
      let numberCount = 0;
      for(let i = 0; i < manipulationArray.length; i++){
        if(!(manipulationArray[i] === " ")) numberCount++;
      }
      if(numberCount % 2 !== 0) return false;

      //organize raw input data into values corresponding to key-value pairs of polybius square object
      for(let i = 0; i < manipulationArray.length; i++){
        if(manipulationArray[i] === " "){
          outputArray.push(manipulationArray[i]);
          continue;
        }
        else{ 
          outputArray.push(`${manipulationArray[i]}${manipulationArray[i+1]}`);
          i++;
        }
      };

      //"decode" message from the values corresponding to polybius square key-value pairs 
      let decodedArray = [];
      for(let i = 0; i < outputArray.length; i++){
        if(outputArray[i] === " ") decodedArray.push(" ");
        else if(outputArray[i] === '42') decodedArray.push("(i/j)");
        else decodedArray.push(polybiusSquareKeys[polybiusSquareValues.indexOf(outputArray[i])]);
      }
      return decodedArray.join("");
      
    }
    
    //encoding code
    for(let i = 0; i < manipulationArray.length; i++){
    outputArray[i] = polybiusSquare[manipulationArray[i]];
  }
  console.log(outputArray.join(""));
  return outputArray.join("");
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
