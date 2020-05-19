/* Fibonacci 斐波那契数列 */

// 递归方法
function fibonacciRecursion(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciIteration(n - 1) + fibonacciIteration(n - 2);
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

console.log('recursion', fibonacciRecursion(9));
console.log('iteration', fibonacciIteration(9));
