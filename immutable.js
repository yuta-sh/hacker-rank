// const x = 10;
// const f = (val) => {
//   val = 20;
// };

// console.log(x);

// const a = {
//   x: 10,
//   y: 20,
// };
// const f = (obj) => {
//   obj.x = 30;
// };
// f(a);
// console.log(a);

// ----------------------------------
const a = {
  prop: 100,
};

const b = {
  prop: 1000,
};

const f = (obj) => {
  // オブジェクトのプロパティ変更は破壊的
  obj.prop = 200;
  // 代入操作はオブジェクトであっても（プリミティブでなくても）安全（非破壊的）
  obj = 300;
  obj = b;
};

f(a);
console.log(a);
// ----------------------------------
