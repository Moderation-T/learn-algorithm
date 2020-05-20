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
