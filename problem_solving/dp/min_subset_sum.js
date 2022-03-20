const n = 5;
const aList = [7, 5, 3, 1, 8];
const a = 12;

// const n = 4;
// const aList = [4, 1, 1, 1];
// const a = 5;

// 候補配列のi番目までの数の中から選んで合計をjにできる最小の選んだ整数の数。j=0~A
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

const dp = make2dArray(n + 1, a + 1, Number.POSITIVE_INFINITY);

dp[0][0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= a; j++) {
    dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
    if (j - aList[i] >= 0) {
      dp[i + 1][j] = Math.min(dp[i][j - aList[i]] + 1, dp[i + 1][j]);
    }
  }
}
console.log(dp);

console.log(dp[1][12]);
console.log(dp[2][12]);
// console.log(dp[1][7]);
const res = dp[n][a];
if (res === Number.POSITIVE_INFINITY) {
  console.log(-1);
} else {
  console.log(res);
}
