/* 
Count Sort (计数排序) 

出现的值当做索引值出现一次加一一次

——————————————————————————————————————————

改进：
改进后实现可保存正负数；稳定性变为稳定
k
----------------------------------------------------------------------------
index
----------------------------------------------------------------------------
count

index = k - min
count = arr[index -1] + n
result ->  result[[k - min] - 1] = k;
*/

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

function countSortPro(arr, maxValue, minValue) {
  // 开辟空间
  const countArr = new Array(maxValue - minValue + 1);

  // 计数
  for (let i = 0; i < arr.length; i++) {
    if (!countArr[arr[i] - minValue]) {
      countArr[arr[i] - minValue] = 0;
    }
    countArr[arr[i] - minValue]++;
  }

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
    result[countArr[arr[i] - minValue] - 1] = arr[i];
    countArr[arr[i] - minValue]--;
  }

  return result;
}

console.log(countSortPro(arr, Math.max(...arr), Math.min(...arr)));
