const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options)
{
    if (str !== undefined) {
        this.str = `${str}`;
    }
    if(options.addition !== undefined) {
        options.addition = `${options.addition}`;
    }
  options = {
      repeatTimes: options.repeatTimes || 1,
      separator: options.separator || '+',
      addition:options.addition || '',
      additionRepeatTimes: options.additionRepeatTimes || 1,
      additionSeparator: options.additionSeparator || '|',
  }
    let a = this.str.toString() + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  a = a.slice(0,a.length - options.additionSeparator.length);
  a = (a + options.separator).repeat(options.repeatTimes);
  return a.slice(0, a.length - options.separator.length);


};
console.log(module.exports('la', { repeatTimes: 3 }))

  