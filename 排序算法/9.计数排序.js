const arr = [23, 11, 54, 2, 3, 11, 9, 9, 9, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

function countSort(arr, maxValue) {
  // 开辟空间
  const countArr = new Array(maxValue + 1);
  let sortIndex = 0;

  // 开始计数
  for (let i = 0; i < arr.length; i++) {
    if (!countArr[arr[i]]) {
      countArr[arr[i]] = 0;
    }

    countArr[arr[i]]++;
  }

  // 开始排序
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arr[sortIndex] = i;
      sortIndex++;
      countArr[i]--;
    }
  }

  return arr;
}

console.log(countSort(arr, Math.max(...arr)));
