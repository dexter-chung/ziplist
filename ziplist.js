"use strict";
function zipList(array1, array2) {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;
}
function zipListTheFunctionalWay(array1, array2) {
    return array1.reduce((array, value, index) => {
        array.push(value, array2[index]);
        return array;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
