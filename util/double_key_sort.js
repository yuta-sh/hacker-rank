const array = [
  { a: 5, b: 1 },
  { a: 1, b: 2 },
  { a: 1, b: 1 },
  { a: 2, b: 1 },
  { a: 2, b: 3 },
];

sortDouble = (item1, item2) => {
  if (item1.a < item2.a) return -1;
  if (item1.a > item2.a) return 1;
  if (item1.b < item2.b) return -1;
  if (item1.b > item2.b) return 1;
  return 0;
};

console.log(array.sort(sortDouble));
