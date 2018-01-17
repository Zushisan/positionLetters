
function countLetters(string){

  var letters = string.split(" ").join("").toLowerCase();
  var output = {};


  for ( var letter of letters){

    if (letter.match(/[a-z]/i)){

      if (output[letter]){

        output[letter] += 1;

      }

      else {
        output[letter] = 1;
      }
    }
  }

return output;
}

console.log(countLetters("My name is Romain."));
