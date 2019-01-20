class MergeSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }
    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  mergeSortedArrays(leftArray, rightArray) {
    let sortedArray = [];
    while (leftArray.length && rightArray.length) {
      let minimumElement = null;
      if (leftArray[0] <= rightArray[0]) {
        minimumElement = leftArray.shift();
      } else {
        minimumElement = rightArray.shift();
      }
      sortedArray.push(minimumElement);
    }
    if (leftArray.length) {
      sortedArray = sortedArray.concat(leftArray);
    }
    if (rightArray.length) {
      sortedArray = sortedArray.concat(rightArray);
    }
    return sortedArray;
  }
}

const buffer = [];
process.stdin.on('data', line => buffer.push(line));
process.stdin.on('end', () => {
  const lines = buffer.toString().split('\n').map(s => s.trim());
  const length = Number(lines[0]);
  const array = lines.slice(1)
    .map(string => string.trim().split(' ').map(n => Number(n)))
    .reduce((acc, cur) => acc.concat(cur), []);
  const result = new MergeSort().sort(array);
  process.stdout.write(result.join(' '));
})
