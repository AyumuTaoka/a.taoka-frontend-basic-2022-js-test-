const sum = (x, y) => {
  let high;
  let low;
  if (x > y) {
    high = x;
    low = y;
  } else {
    high = y;
    low = x;
  }
  let tmp = 0;
  for (i = low; i <= high; i++) {
    tmp += i;
  }
  return tmp;
};

module.exports = { sum };
