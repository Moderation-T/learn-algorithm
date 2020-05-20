/* 

  最优装载问题 ： 海盗发现宝物，每件宝物都价值连城，船的载重为 W ，每件宝物重量为Wi，海盗如何能带走尽量多的宝物

  在北美洲东南部，有一片神秘的海域，是海盗最活跃的加勒比海
  有一天，海盗们截获了一艘装满各种各样古董的货船，每一件古董都价值连城，一旦打碎就失去了它的价值
  海盗船的载重量为W，每件古董的重量为?i，海盗们该如何把尽可能多数量的古董装上海盗船？
  比如W为30，?i分别为3、5、4、10、7、14、2、11

*/

// 宝物分别的重量
const wis = [3, 5, 4, 10, 7, 14, 2, 11];
// 船的承重
const w = 30;

function pirate(w, wis) {
  // 已装载宝物的总重量
  let weight = 0;
  let treasures = wis.sort(function (a, b) {
    return a - b;
  });
  let checked = [];
  let count = 0;

  for (let i = 0; i < treasures.length && weight < w; i++) {
    weight += treasures[i];
    if (weight < w) {
      count++;
      checked.push(treasures[i]);
    }
  }

  return `海盗共装载了${count}件宝物，重量分别为${checked}`;
}
console.log(pirate(w, wis));
