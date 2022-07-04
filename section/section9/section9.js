const userIdList = (arr) => {
  let tmpArr = [];
  for (i in arr) {
    tmpArr.push(arr[i].userId);
  }
  tmpArr = Array.from(new Set(tmpArr));
  return tmpArr;
};

const fixData = (arr) => {
  let ansArr = [];
  let sameUId = {};
  let datas = [];
  UIList = userIdList(arr);
  for (i in UIList) {
    datas = [];
    sameUId = {};
    for (j in arr) {
      if (arr[j].userId == UIList[i]) {
        delete arr[j].userId;
        datas.push(arr[j]);
      }
    }
    sameUId.userId = UIList[i];
    sameUId.datas = datas;
    ansArr.push(sameUId);
  }
  return ansArr;
};
module.exports = { userIdList, fixData };
