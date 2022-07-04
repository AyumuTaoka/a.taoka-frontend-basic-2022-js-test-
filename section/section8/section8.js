const firstIndex = (arr) => {
  return arr[0];
};
const countArrayLength = (arr) => {
  if (!Array.isArray(arr)) {
    return "これは配列ではありません";
  }
  len = arr.length;
  if (len == 0) {
    return "この配列は空配列です";
  } else if (len >= 1) {
    return "この配列は" + len + "個のデータを持っています";
  } else {
    return "これは配列ではありません";
  }
};

const extractArray = (arr) => {
  let tmpArr = [];
  for (i = 1; i < 3; i++) {
    if (arr[i] != undefined) {
      tmpArr.push(arr[i]);
    }
  }
  return tmpArr;
};

const makeMark = (mark, number) => {
  let tmpArr = [];
  for (i = 0; i < number; i++) {
    tmpArr.push(mark);
  }
  return tmpArr;
};

const onlyString = (arr) => {
  let tmpArr = [];
  for (i in arr) {
    if (typeof arr[i] === "string") {
      tmpArr.push(arr[i]);
    }
  }
  return tmpArr;
};

const addNumber = (arr) => {
  let newArr = [];
  for (i in arr) {
    i = Number(i) + 1;
    newArr.push(i + ": " + arr[i - 1]);
  }
  return newArr;
};

module.exports = {
  firstIndex,
  countArrayLength,
  extractArray,
  makeMark,
  onlyString,
  addNumber,
};
