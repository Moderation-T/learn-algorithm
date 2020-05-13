/* 
Radix Sort (基数排序)

个位      n / 1 % 10
十分位    n / 10 % 10
百分位    n / 100 % 10
千分位    n / 1000 % 10
 */
const arr = [23, 11, 3245, 54, 2, 3, 345, 11, 9, 9, 9, 6, 123, 65, 78, 13, 9, 32, 69, 90, 20, 45, 33342, 76, 20];

function radixSort(arr, maxValue) {
  for (let divider = 1; divider < maxValue; divider *= 10) {
    // 对每一位进行计数排序
    countSort(arr, divider);
  }

  return arr;
}

function countSort(arr, divider) {
  // 开辟空间
  const countArr = new Array(10);

  // 计数
  for (let i = 0; i < arr.length; i++) {
    const num = Math.floor((arr[i] / divider) % 10);

    if (!countArr[num]) {
      countArr[num] = 0;
    }
    countArr[num]++;
  }

  // 累加
  for (let i = 1; i < countArr.length; i++) {
    if (!countArr[i - 1]) {
      countArr[i - 1] = 0;
    }
    if (!countArr[i]) {
      countArr[i] = 0;
    }
    countArr[i] += countArr[i - 1];
  }

  // 放入相应位置
  const result = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = Math.floor((arr[i] / divider) % 10);
    result[countArr[num] - 1] = arr[i];
    countArr[num]--;
  }

  // 更新 arr
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
}

console.log(radixSort(arr, Math.max(...arr)));
