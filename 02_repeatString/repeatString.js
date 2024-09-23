const repeatString = function(string, num) {
    let cadena = "";
    for (let i = 0; i < num; i++) {
        cadena += string;
    }
    return cadena;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
