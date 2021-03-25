const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    new Error();
  }
  if (arr.length < 0) return [];

  let new_arr = [];

  for (let item = 0; item < arr.length; item++) {
    switch (arr[item]) {
      case '--discard-next':
        if (item < arr.length) {
          item++;
          if (arr[item + 1] == "--discard-prev" || arr[item + 1] == "--double-prev") {
            item++;
          }
        }
        continue;
      case '--discard-prev':
        if (item > 0) {
          new_arr.pop();
        }
        continue;
      case '--double-next':
        if (item < arr.length - 1) {
          new_arr.push(arr[item + 1]);
        }
        continue;
      case '--double-prev':
        if (item > 0) {
          new_arr.push(arr[item - 1]);
        }
        continue;
      default:
        new_arr.push(arr[item]);
        continue;
    }
  }
  return new_arr;
};
