
function positionLetters(string){

  var letters = string.split(" ").join(" ").toLowerCase();

  console.log(letters);
  var output = {};


  // for ( var letter of letters){

  //   if (letter.match(/[a-z]/i)){

  //     if (output[letter]){

  //       output[letter] += output[letter] + ", ";

  //     }

  //     else {
  //       output[letter] = ;
  //     }
  //   }
  // }

  for (var i = 0; i < letters.length; i++){
    if (letters[i].match(/[a-z]/i)){

      if (output[letters[i]] !== undefined){

        output[letters[i]] += ", " + i;

      }
      else {

        output[letters[i]] = i;

      }
    }
  }

return output;

}

console.log(positionLetters("My name is Romain."));
