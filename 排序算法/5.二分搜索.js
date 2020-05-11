const arr = [2, 6, 9, 11, 13, 20, 23, 32, 45, 54, 65, 69, 76, 78, 90];

function binarySearch(arr, value) {
  if (arr.length === 0 || arr === null) return -1;
  let begin = 0;
  let end = arr.length;

  while (begin < end) {
    const midIndex = Math.floor((end + begin) / 2); // 去中间值索引

    if (value > arr[midIndex]) {
      begin = midIndex + 1;
    } else if (value < arr[midIndex]) {
      end = midIndex;
    } else {
      return midIndex;
    }
  }

  return -1;
}

console.log(binarySearch(arr, 7));
