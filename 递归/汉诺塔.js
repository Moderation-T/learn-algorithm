/* 汉诺塔：A 上有 n 个盘子从小到大排列，将他们都异动到 C 上，且大盘子不能在小盘子上边。 */

/**
 *此函数的功能为将 n 个盘子从 A 移动到 C
 *
 * @param {*} n n个盘子
 * @param {*} A 左边柱子
 * @param {*} B 中间柱子
 * @param {*} C 右边柱子
 */
function hanoi(n, A, B, C) {
  if (n === 1) {
    move(n, A, C);
    return;
  }
  // 第一步 将 n-1 个盘在移动到 B 上
  hanoi(n - 1, A, C, B);
  // 第二步 将 A 上第 n 个盘子移动到 C 上
  move(n, A, C);
  // 第三步 将 B 上 n-1 个盘子移动到 C 上
  hanoi(n - 1, B, A, C);
}

/**
 *此函数的功能为：将第 n 个盘子，从 from 位置移动到 to 位置
 *
 * @param {*} no 第 n 个盘子
 * @param {*} from 初始位置
 * @param {*} to 移动到
 */
function move(no, from, to) {
  console.log(`将第${no}个盘子从${from}移动到${to}`);
}

hanoi(3, 'A', 'B', 'C');
