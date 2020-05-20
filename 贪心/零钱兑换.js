/* 
  贪心策略大部分情况并不一定能获得全局最优解 

  假设有25分、10分、5分、1分的硬币，现要找给客户41分的零钱，如何办到硬币个数最少？

*/

const faces = [25, 10, 1, 5];
const money = 42;

function coinChange(faces, money) {
  let remaining = money;
  let facesOrder = faces.sort(function (a, b) {
    return b - a;
  });
  let i = 0;
  let result = [];
  let count = 0;
  while (i < facesOrder.length) {
    if (remaining < facesOrder[i]) {
      i++;
      continue;
    }

    remaining -= facesOrder[i];
    result.push(facesOrder[i]);
    count++;
  }

  return `共找零${count}张，面值分别为${result}`;
}

console.log(coinChange(faces, money));
