/*
 shell sort (希尔排序)
 
*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

// 步长序列
function shellStepSequence(arr) {
  const stepSequence = [];
  let step = arr.length;

  while (Math.floor(step / 2) > 0) {
    step = Math.floor(step / 2);
    stepSequence.push(step);
  }

  return stepSequence;
}

const stepSequence = shellStepSequence(arr);
// 循环步长
for (let i = 0; i < stepSequence.length; i++) {
  let step = stepSequence[i];
  // 按列循环
  for (let col = 0; col < step; col++) {
    // 每列进行比较交换位置
    for (let begin = col + step; begin < arr.length; begin += step) {
      let cur = begin;
      while (cur > col && arr[cur] < arr[cur - step]) {
        const tmp = arr[cur];
        arr[cur] = arr[cur - step];
        arr[cur - step] = tmp;
        cur -= step;
      }
    }
  }
}

console.log(arr);
