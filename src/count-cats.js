const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  const findCats = [].concat(...matrix);
  findCats.forEach((element) => {
    if (element === '^^')
    {
      count++;
    }
  })
  return count;
};
