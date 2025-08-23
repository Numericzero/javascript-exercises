const palindromes = function (str) {
    let oldStr = str.replace(/\s/g, "").replace(/[^\w]/g, "").toLowerCase();
    let newStr = oldStr.split("").reverse().join("").toLowerCase();
    return newStr == oldStr;
};

// Do not edit below this line
module.exports = palindromes;
