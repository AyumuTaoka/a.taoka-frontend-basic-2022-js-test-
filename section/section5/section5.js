const score = (x) => {
  if (x == null) {
    return "後日受験";
  } else if (x <= 100 && x >= 80) {
    return "合格";
  } else if (x < 80 && x >= 60) {
    return "追試";
  } else if (x < 60 && x >= 0) {
    return "不合格";
  } else {
    return "0以上100未満の数字を入れてください";
  }
};

module.exports = { score };
