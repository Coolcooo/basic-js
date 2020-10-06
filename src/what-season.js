const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
 const seasons = {winter: [11,0,1],spring:[3,4,2], summer:[6,7,5],autumn:[9,10,8]}
  for(let key of Object.keys(seasons)) {
    if (seasons[key].includes(date.getMonth())) {
      return key;
    }
  }
};

