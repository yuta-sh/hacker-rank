const s = "abcdefghi";
const t = "acdefxhij";

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

// sからi、tからj番目までの文字の間の最小操作回数
// dp[i+1][j+1]
const dp = make2dArray(s.length + 1, t.length + 1, Number.POSITIVE_INFINITY);

dp[0][0] = 0;

// 表を書いていくと、左、下、斜め下のルートが3つあり、それが全部+1か、斜めで同じ数字のときだけ0っていうのがわかる。
// 具体的に表ベースに変換して積みあがっていく様子を考えるのが大事。
for (let i = -1; i < s.length; i++) {
  for (let j = -1; j < t.length; j++) {
    if (s[i + 1] === t[j + 1]) {
      if (i >= 0 && j >= 0) {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j]);
      }
    } else {
      if (j >= 0) {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i + 1][j] + 1);
      }
      if (i >= 0) {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j + 1] + 1);
      }
      if (i >= 0 && j >= 0) {
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j] + 1);
      }
    }
  }
}

console.log(dp[s.length][t.length]);
