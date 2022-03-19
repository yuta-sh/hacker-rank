const n = 3;
const aList = [10, 20, 30];

const bList = [40, 50, 60];
const cList = [70, 80, 90];

// dp[i]はi日目にjの活動を選んだ時に得ている幸福の総和の最大
// jは0がa,1がb,2がc

const make2dArray = (i, j, value = 0) => {
  const array = Array(i);
  for (let a = 0; a < i; a++) {
    array[a] = [];
    for (let b = 0; b < j; b++) {
      array[a][b] = value;
    }
  }
  return array;
};

const dp = make2dArray(n + 1, 3);

// 初期条件
dp[0][0] = 0;
dp[0][1] = 0;
dp[0][2] = 0;

for (let i = 0; i < n; i++) {
  dp[i + 1][0] = Math.max(
    dp[i + 1][0],
    dp[i][1] + bList[i],
    dp[i][2] + cList[i]
  );
  dp[i + 1][1] = Math.max(
    dp[i + 1][1],
    dp[i][0] + aList[i],
    dp[i][2] + cList[i]
  );
  dp[i + 1][2] = Math.max(
    dp[i + 1][2],
    dp[i][0] + aList[i],
    dp[i][1] + bList[i]
  );
}

const allMax = Math.max(dp[n][0], dp[n][1], dp[n][2]);

console.log(dp);
console.log(allMax);
