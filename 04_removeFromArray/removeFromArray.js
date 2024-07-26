const removeFromArray = function(array, num) {
    const newArray =[];
    for (let i = 0; i < array.length; i++) {
        let valid = true;
        for(let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                valid = false;
            }
        }
        if (valid) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
