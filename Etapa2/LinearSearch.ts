function LinearSearchFor(target: number) {
  let array: number[] = [9, 13, 51, 6, 71, 3, 7, 1, 8];
  for (let index = 0; index <= array.length; index++) {
    if (array[index] === target) {
      return console.log(`target: ${target}, found at postion: ${index}`);
    }
  }
  console.log(`target: ${target} not found`);
  return -1;
}
LinearSearchFor(1);
