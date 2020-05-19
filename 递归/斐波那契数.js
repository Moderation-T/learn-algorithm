/* Fibonacci 斐波那契数列 */

// 递归方法
function fibonacciRecursion(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciIteration(n - 1) + fibonacciIteration(n - 2);
}

// 递归方法优化 - 利用数组
function fibonacciRecursionArray(n) {
  const array = new Array(n); // 储存的是第 n 个数字的和
  if (n === 0) {
    return (array[0] = 0);
  }
  if (n === 1) {
    return (array[1] = 1);
  }

  if (!array[n]) {
    return (array[n] = fibonacciRecursionArray(n - 1) + fibonacciRecursionArray(n - 2));
  }

  return array[n];
}

// 迭代方法
function fibonacciIteration(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = second;
    second = first + second;
    first = tmp;
  }

  return second;
}

console.log('recursion', fibonacciRecursion(23));
console.log('iteration', fibonacciIteration(23));
console.log('recursionArray', fibonacciRecursionArray(23));
