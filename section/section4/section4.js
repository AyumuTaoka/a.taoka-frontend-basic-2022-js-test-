const echoDiv = (x, y) => {
  return "商: " + Math.floor(x / y) + ", 余り: " + (x % y);
};

const reply = (x) => {
  if (x == null) {
    return "返信なし";
  } else {
    return x;
  }
};

module.exports = { echoDiv, reply };
// console.log(echoDiv(16, 3));
