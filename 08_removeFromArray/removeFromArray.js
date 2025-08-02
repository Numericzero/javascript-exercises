const removeFromArray = function(arr, ...args) {
    args.forEach(element => {
        let elemFound = true

        while(elemFound)
        {
            let index = arr.indexOf(element)
            if(index == -1)
                elemFound = false
            else
                arr.splice(index, 1)
        }
    });

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
