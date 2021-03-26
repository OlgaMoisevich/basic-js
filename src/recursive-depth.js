const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth=1, levels=[]) {
    levels.push(depth);
    arr.forEach(i => {
          if (Array.isArray(i)){
            this.calculateDepth(i, depth+1, levels)}
        }
    );
    return Math.max(...levels);
  }
};
