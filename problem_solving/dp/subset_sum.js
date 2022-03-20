const n = 3;
const aList = [7, 5, 3];
const a = 10;

// 候補配列のi番目までの数の中から選んで合計をjにできるかどうかのtrue,false。j=0~A
// dp[i + 1][j];

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

const dp = make2dArray(n + 1, a + 1, false);
dp[0][0] = true;

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= a; j++) {
    dp[i + 1][j] = dp[i + 1][j] || dp[i][j];
    if (j - aList[i] >= 0) {
      dp[i + 1][j] = dp[i + 1][j] || dp[i][j - aList[i]];
    }
  }
}
console.log(dp);
console.log(dp[1][7]);
console.log(dp[2][5]);
console.log(dp[2][7]);
console.log(dp[3][10]);
console.log(dp[n][a]);
