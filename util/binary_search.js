// jsではlower_bound的なのがないから、自前で実装しないといけない。
// 普通のbinary_search

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 昇順
const binarySearch = (value) => {
  let left = 0;
  let right = array.length - 1;

  //   最後の1個が残るときはleft = mid = right。その処理の最後で+1か-1で rightとleftが逆転する。
  while (right >= left) {
    let mid = Math.floor((right - left) / 2) + left;
    if (array[mid] === value) return mid;
    if (array[mid] < value) left = mid + 1;
    if (array[mid] > value) right = mid - 1;
  }
  //   見つからない場合は-1
  return -1;
};

console.log(binarySearch(3), binarySearch(11));

// 拡張したbinary_search（あるソートされた値に対して、true,false条件で分割されるような条件Pがあるときに、その最小のtrueを返す）

const wideBinarySearch = (value) => {
  const P = (index) => {
    //   left端がfalseで、right端がtrueになるようにする。やりたいことによって変える。
    return value <= array[index];
  };

  let left = 0;
  let right = array.length - 1;

  //   true条件のものが存在しない場合は-1。
  if (!P(right)) return -1;

  while (right - left > 1) {
    let mid = left + Math.floor((right - left) / 2);
    if (P(mid)) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

console.log(wideBinarySearch(3), wideBinarySearch(11));
