/* 
Insertion Sort （插入排序）
执行流程
① 在执行过程中，插入排序会将序列分为2部分✓头部是已经排好序的，尾部是待排序的
② 从头开始扫描每一个元素
每当扫描到一个元素，就将它插入到头部合适的位置，使得头部数据依然保持有序

------------------------------------------------------------------------------
③ 优化一：
思路是将【交换】转为【挪动】
①先将待插入的元素备份
②头部有序数据中比待插入元素大的，都朝尾部方向挪动1个位置③将待插入元素放到最终的合适位置

*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

for (let i = 1; i < arr.length; i++) {
  let cur = i;
  // 一直向前比较 如果小于就和前面的交换
  while (cur > 0 && arr[cur] < arr[cur - 1]) {
    const tmp = arr[cur];
    arr[cur] = arr[cur - 1];
    arr[cur - 1] = tmp;
    cur--;
  }
}

// ③ 优化一
for (let i = 1; i < arr.length; i++) {
  let cur = i;
  const curData = arr[cur];
  // 将前面的数字依次和备份的数据比较 如果小于前面的数字 将前面的数字向后挪动
  while (cur > 0 && curData < arr[cur - 1]) {
    arr[cur] = arr[cur - 1];
    cur--;
  }

  arr[cur] = curData;
}

console.log(arr);
