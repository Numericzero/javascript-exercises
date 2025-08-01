const reverseString = function(str) {
    buff = str.split("")
    reversed = buff.reduce((string, item) => string = item + string, "")

    return reversed
};

// Do not edit below this line
module.exports = reverseString;
