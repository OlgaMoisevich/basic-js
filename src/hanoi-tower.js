const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // M n = 2 n -1
  let min_moov = Math.pow(2, disksNumber)-1;

  return {
    turns: min_moov,
    seconds: Math.floor(min_moov/(turnsSpeed/3600))
  }

};
