/* 
  Binary Search (二分搜索)

  每次比较查找可去掉一半的值
*/

const arr = [2, 6, 9, 11, 13, 20, 23, 32, 45, 54, 65, 69, 76, 78, 90];

function binarySearch(arr, value) {
  if (arr.length === 0 || arr === null) return -1;
  let begin = 0;
  let end = arr.length;

  while (begin < end) {
    const midIndex = Math.floor((end + begin) / 2); // 去中间值索引

    if (value > arr[midIndex]) {
      // 如果要查找的值大于中间值 那么就查找右边
      begin = midIndex + 1;
    } else if (value < arr[midIndex]) {
      // 如果要查找的值小于中间值 那么就查找左边
      end = midIndex;
    } else {
      // 相等则返回索引
      return midIndex;
    }
  }

  // 最后都没找到就说明没有
  return -1;
}

console.log(binarySearch(arr, 7));
