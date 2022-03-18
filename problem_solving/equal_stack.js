const size = (array) => {
  return array.reduce((acc, cur) => {
    return (acc = acc + cur);
  }, 0);
};

const fetchMax = (h1, h2, h3) => {
  const h1Size = size(h1);
  const h2Size = size(h2);
  const h3Size = size(h3);
  const maxSize = Math.max(h1Size, h2Size, h3Size);
  if (maxSize === h1Size) {
    return h1;
  } else if (maxSize === h2Size) {
    return h2;
  } else if (maxSize === h3Size) {
    return h3;
  }
  throw new Error();
};

const equalStacks = (h1, h2, h3) => {
  // Write your code here
  while (!(size(h1) === size(h2) && size(h2) === size(h3))) {
    //   TODO:sizeをメモ化する
    const max = fetchMax(h1, h2, h3);
    max.pop();
  }
  return size(h1);
};

// const h1 = [1, 1, 1, 2, 3];
// const h2 = [2, 3, 4];
// const h3 = [1, 4, 1, 1];

const h1 = [1, 1, 2, 1];
const h2 = [2, 1, 1];
const h3 = [1, 1];

fetchMax(h1, h2, h3);

console.log(equalStacks(h1, h2, h3));
