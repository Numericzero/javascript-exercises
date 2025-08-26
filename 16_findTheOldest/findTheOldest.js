const findTheOldest = function(arr) {
    let sortedArr = arr.sort((a, b) => {
        let d = new Date()
        let curYear = d.getFullYear();
        let aage = null;
        let bage = null;
        if(a.yearOfDeath)
            aage = a.yearOfDeath - a.yearOfBirth;
        else
            aage = curYear - a.yearOfBirth;

        if(b.yearOfDeath)
            bage = b.yearOfDeath - b.yearOfBirth;
        else
            bage = curYear - b.yearOfBirth;

        return aage-bage;
    }).reverse();
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
