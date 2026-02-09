function zipList(array1: unknown[], array2 : unknown[]) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  return newArray;
}

function zipListTheFunctionalWay(array1: unknown[], array2 : unknown[]) {
  return array1.reduce((array: unknown[], value: unknown, index: number) => {
    array.push(value, array2[index]);
    return array;
  }, []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
