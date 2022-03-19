const n = 4;
const hList = [10, 30, 40, 20];

// jsって参照渡し？それとも実体渡し？インスタンスのときは～とかで違う？

// ------------------------------------------------------------------------------------
// dp版

// dpはカエルが足場iにたどりつくまでのコストの総和の最小値
const dp = Array(n).fill(Number.POSITIVE_INFINITY);

for (let i = 0; i < n; i++) {
  switch (i) {
    case 0:
      dp[i] = 0;
      break;
    case 1:
      dp[i] = Math.min(dp[i], dp[i - 1] + Math.abs(hList[i] - hList[i - 1]));
      break;
    default:
      dp[i] = Math.min(dp[i], dp[i - 1] + Math.abs(hList[i] - hList[i - 1]));
      dp[i] = Math.min(dp[i], dp[i - 2] + Math.abs(hList[i] - hList[i - 2]));
      break;
  }
}

console.log(dp[n - 1]);

// ------------------------------------------------------------------------------------
// メモ化再帰版

// i番目の足場にたどりつくまでのコストの総和の最小値
const memo = Array(n).fill(Number.POSITIVE_INFINITY);

const minCost = (i) => {
  if (memo[i] < Number.POSITIVE_INFINITY) {
    return memo[i];
  }

  if (i === 0) {
    memo[i] = 0;
    return 0;
  }
  let res = Number.POSITIVE_INFINITY;

  res = Math.min(res, minCost(i - 1) + Math.abs(hList[i] - hList[i - 1]));

  if (i > 1) {
    res = Math.min(res, minCost(i - 2) + Math.abs(hList[i] - hList[i - 2]));
  }

  memo[i] = res;
  return memo[i];
};

console.log(minCost(n - 1));
