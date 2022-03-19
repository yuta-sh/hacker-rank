const n = 5;
const k = 3;
const hList = [10, 30, 40, 50, 20];
// dp[i]はi番目にたどり着くまでの最小コスト
const dp = Array(n).fill(Number.POSITIVE_INFINITY);

// j=i~i+k
// dp[j] = Math.max(dp[i] + Math.abs(hList[j] - hList[i]));

dp[0] = 0;

for (let i = 0; i < n; i++) {
  for (let j = 1; j <= k; j++) {
    if (i + j < n) {
      dp[i + j] = Math.min(
        dp[i + j],
        dp[i] + Math.abs(hList[i + j] - hList[i])
      );
      console.log(i, j, dp);
    }
  }
}

console.log(dp);
console.log(dp[n - 1]);
