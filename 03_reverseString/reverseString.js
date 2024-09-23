const reverseString = function(string) {
    // convertir la cadena en un array
    let stringToArray = string.split("");
    
    // revertimos el array y lo volvemosa convertir en string
    let reverseString = stringToArray.reverse().join("");

    return reverseString;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
