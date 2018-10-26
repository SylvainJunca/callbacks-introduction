var words = ["ground", "control", "to", "major", "tom"];

var fLength = function(word) {
  return word.length;
};

var toUpper = function(word) {
  return word.toUpperCase();
};

var mess = function(word) {
  return word.split('').reverse().join('');
};

//this is my new map function
function newMap(array, callback) {
    result = [];
    array.forEach( function(word) {
        result.push(callback(word));
    })
    return result;
}

//checking 
console.log(newMap(words, function(word) {
    return word.length;
  } ))
console.log (newMap(words, toUpper));
console.log(newMap(words, mess));
/* Should return 

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] */