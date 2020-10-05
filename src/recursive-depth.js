const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    if (arr.length === 0) {
      return 1;
    } else {
      const depthMax = arr.map(e => {
        const depth = 1;
        if (Array.isArray(e)) {
          console.log(e)
          return depth + this.calculateDepth(e);

        } else {
          console.log(depth)
          return depth;
        }
      })
      console.log((depthMax))
      return Math.max(...depthMax);
    }
  }
};
