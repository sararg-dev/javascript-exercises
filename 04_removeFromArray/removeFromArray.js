const removeFromArray = function(myArray, ...argsToRemove) {

    let result = myArray;

    for (arg of argsToRemove) {
        result = result.filter(element => element !== arg);
    }

    return result;
};


// Do not edit below this line
module.exports = removeFromArray;
