// dp[i][j]はSからi番目、Tからj番目までの文字列の部分文字列の最大値

// 初期条件は
// dp[i][0]=0
// dp[0][i]=0

// dp[i+1][j] =

// S[i+1] === T[i+1]のときは、必ずdp[i+1][j+1]++
// 以下は S[i+1] != T[j+1]のときを考える

// 中でも特に下記のような場合を具体例として考える
// // S = [a,b,c,d,e,x]
// // T = [a,c,x,p,y]

// dp[i][j]から考えると、dp[i+1][j+1]は
// 上の例でいうとdp[6][5]は新しくxを加えたのだから、
// そいつが過去に最大部分文字列に使ったやつの余りの部分に入っていた場合にはdp++になるのでは？という疑問だ。
// 今回の例でいうと、今回S[6]=xを追加したが、今までの最大部分文字列に使ったのは、a,cまで。
// よってそれ以降の文字であるT[3]のxを考慮に入れて、dpを++するのでは？ということだ。

// たしかにdp[i][j]から考えようとすると、そういう考慮を入れる必要が出てくる。
// ただ、それは複雑な遷移になってよくわからなくなる。

// そこで、dp[i+1][j]を考えてみる。（片方だけあげた場合）
// こいつのことを考えてみると、この中に実はすでに新しくdp++をするかもしれない要素の考慮が入っていることがわかる。
// どういうことかというと、dp[6][3]の時点で、同じ文字xを加えたときのdp++が入っている。
// つまり、dp[6][5]を求めたいときに、
// 過去に最大部分文字列に使ったやつの余りの部分にxが入っていた場合にdp++したいという条件は、dp[6][3]の時点で回収されているのだ。
// あくまでも、dp++となるのは、新しく同じ文字列の組み合わせを追加しようとしたときのみ考えればよいことがわかる。

// よって片方だけ上げた場合にはすでに考慮が入っているので、それをどっちも考慮してあげて緩和すればよい。
// よって、dp[i+1][j+1] = max(dp[i+1][j],dp[i][j+1])
// 先にiかjの先のものが必要になるが、それはfor文のiループ、jループの順序的にすでに求まっているので問題ない。
// （表のイメージでいうならば、すでに求めたいところの左と上がわかっているので、それを用いて求めたい部分がわかるということ）

// S[i+1] === T[i+1]のときと
// S[i+1] != T[j+1]のとき
// は排反である。
// また、S[i+1] != T[j+1]のとき内での分岐も、比べているものがSとTの2種類しかなくて、Sから見たdpとTから見たdpを比べた結果を出しているので網羅できている。
// よって全体的にケースを網羅できている。

// ----------------------------------------------------------------------------------------------------------------------------
// 説明2
// こっちの方がちゃんとわかっている説明な気がする

// dp[i][j]はSからi番目、Tからj番目までの文字列の部分文字列の最大値

// 初期条件は
// dp[i][0]=0
// dp[0][i]=0

// 中でも特に下記のような場合を具体例として考える
// // S = [a,b,c,d,e,x]
// // T = [a,c,x,p,y]
// 今、
// dp[i+1][j+1]を考える。
// 上の例でいうと、xとyを追加する時点のdp[6][5]についての漸化式の関係を考える。

// S[i+1] === T[i+1]のときは、必ずdp[i+1][j+1] = dp[i][j]++になる。（前の部分文字列に使ってないやつの残りで同じものがあり、最終的にそちらを使うことになろうが、ひとまず1増えることに変わりはない）
// 以下は S[i+1] != T[j+1]のときを考える

// 片方だけ上げた値、dp[i+1][j]、dp[i][j+1]はわかっているとする。
// 上の例でいうと、Sにxだけを追加してTは元のまま状態のdpと、Tにyだけを追加してSは元のままの状態のdpはわかっている。
// すると、dp[i+1][j+1]っていうのは、
// // S = [a,b,c,d,e,x]
// // T = [a,c,x,p]
// か
// // S = [a,b,c,d,e]
// // T = [a,c,x,p,y]
// のどちらかの最大共通部分文字列とは必ず一致するはずだ。

// それは下記の理由。
// xとyをそれぞれSとTに追加するとき、最大共通部分文字列はdp[i][j]の状態と比べて増えるとしても高々1。
// xで増える場合、それはdp[i+1][j]ですでに考慮されている増加分である。
// yで増える場合、それはdp[i][j+1]ですでに考慮されている増加分である。
// どちら分も増える（2増える）ってことはありえない（だって高々1までしか増えないから。ここちょっと納得しづらいけどね。でも論理的にはそうでしょ。）
// なので、
// dp[i+1][j+1] = max(dp[i+1][j],dp[i][j+1])
// が成り立つ。

const s = "abracadabra";
const t = "aabraardba";

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

// dp[i+1][j+1]はSからi番目まで、Tからj番目までの文字列でのlcs。
const dp = make2dArray(s.length + 1, t.length + 1);

for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      dp[i + 1][j + 1] = Math.max(dp[i][j] + 1, dp[i + 1][j + 1]);
    }
    dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i + 1][j], dp[i][j + 1]);
  }
}

console.log(dp[s.length][t.length]);
