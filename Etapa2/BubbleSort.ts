function bubbleSort(array: number[]): number[] {
  let counter: number = 0;
  let n: number = array.length;
  for (let index = 0; index < n - 1; index++) {
    for (let subIndex = 0; subIndex < n - 1 - index; subIndex++) {
      counter++;
      if (array[subIndex] > array[subIndex + 1]) {
        const numberHolder: number = array[subIndex];
        array[subIndex] = array[subIndex + 1];
        array[subIndex + 1] = numberHolder;
        console.log(array);
      }
    }
  }
  return array;
}

let array: number[] = [6, 2, 8, 3, 1, 4, 9, 5, 7, 10];
console.log(bubbleSort(array));
