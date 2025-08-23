const fibonacci = function(n) {
    let prevValue = 0;
    let currValue = 1;

    if(n==0)
        return 0;
    else if(n<0)
        return "OOPS"

    for(let i = 1; i < n; i++)
    {
        let temp = currValue;
        currValue = currValue + prevValue;
        prevValue = temp;
    }

    return currValue;
};

// Do not edit below this line
module.exports = fibonacci;
