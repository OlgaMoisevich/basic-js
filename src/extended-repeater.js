const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, option) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = option;

  let return_arr = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i === 0) {
      return_arr.push(String(str));
    }
    return_arr.push(String(addition));
    if (i !== additionRepeatTimes - 1) {
      return_arr.push(additionSeparator);
    } else {
      return_arr.push(separator);
    }
  }
  return new Array(repeatTimes).fill(return_arr.join('')).join('').slice(0, -separator.length);
};

