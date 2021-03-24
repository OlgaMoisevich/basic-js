const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let new_arr = [];
  let count_cat= 0;

  arr.forEach(i=>{
    new_arr = [...new_arr, ...i]
  });

  new_arr.forEach(i=>{
    if(i == '^^'){
      count_cat++;
    }
  });
  return count_cat
};


