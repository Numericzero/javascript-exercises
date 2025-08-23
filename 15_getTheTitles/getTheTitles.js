const getTheTitles = function(arr) {
    let titles = [];
    for(let item in arr)
        titles.push(arr[item].title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
