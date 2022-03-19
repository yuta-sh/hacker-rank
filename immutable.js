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

const a = {
  prop: 100,
};

const f = (obj) => {
  obj.prop = 200;
  obj = 300;
};

f(a);
console.log(a);
