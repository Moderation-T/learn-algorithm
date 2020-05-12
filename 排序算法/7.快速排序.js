/* 
Quick Sort （快速排序）
  确定一个轴点元素 然后进行快速排序 
  然后轴点左右再进行快速排序
  是个递归操作

 */

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

function quickSort(arr, begin, end) {
  if (end - begin < 2) return arr;
  //轴点元素的Index
  let mid = pivotIndex(arr, begin, end); // 0
  // 左边
  quickSort(arr, begin, mid);
  // 右边
  quickSort(arr, mid + 1, arr.length);

  return arr;
}

function pivotIndex(arr, begin, end) {
  // 储存轴点元素
  let pivot = arr[begin];
  end--;

  while (begin < end) {
    while (begin < end) {
      if (arr[end] > pivot) {
        end--;
      } else {
        arr[begin] = arr[end];
        begin++;
        break;
      }
    }
    while (begin < end) {
      if (arr[begin] < pivot) {
        begin++;
      } else {
        arr[end] = arr[begin];
        end--;
        break;
      }
    }
  }

  arr[begin] = pivot;

  return begin;
}

console.log(quickSort(arr, 0, arr.length));
