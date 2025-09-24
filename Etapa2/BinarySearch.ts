function binarySearch(target: number, array: number[]) {
  array.sort((a, b) => a - b);
  let initalIndex = 0;
  let lastIndex = array.length - 1;

  while (initalIndex <= lastIndex) {
    const middleIndex = Math.floor((initalIndex + lastIndex) / 2);
    const middleValue = array[middleIndex];

    console.log(`${initalIndex} > ${middleIndex} > ${lastIndex}`);

    if (middleValue === target) return middleValue;
    if (target > middleValue) {
      initalIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return undefined;
}
console.log(binarySearch(10, [2, 5, 6, 1, 7, 8, 9, 10, 3, 4]));
