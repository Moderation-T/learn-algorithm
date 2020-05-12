/* 
Merge Sort （归并排序） 
执行流程
① 不断地将当前序列平均分割成2个子序列✓直到不能再分割（序列中只剩1个元素）
② 不断地将2个子序列合并成一个有序序列✓直到最终只剩下1个有序序列

*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

function mergeSort(arr) {
  // 采用自上而下的递归方法
  var len = arr.length;
  if (len < 2) {
    return arr;
  }

  // 取出中间数
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle), // 左边
    right = arr.slice(middle); // 右边
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  // 两边都没交换完成
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 右边先完成
  while (left.length) result.push(left.shift());

  // 左边先完成
  while (right.length) result.push(right.shift());

  return result;
}
