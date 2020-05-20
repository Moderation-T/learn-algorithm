/* 上楼梯 ： 可以一次走一个台阶 也可以一次走两个台阶 一共有几种走法 */

function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(3));
