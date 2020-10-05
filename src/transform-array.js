const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    let acc = [];
    for (let i = 0;i < arr.length;i++) {
        if (arr[i] === undefined) {
            continue;
        }
        switch (arr[i]) {
            case '--discard-next': {
                i++;
                break;
            }
            case '--discard-prev': {
                if(arr[i-2] !== '--discard-next') {
                    acc.pop();
                }
                break;

            }
            case '--double-next': {

                if (arr[i+1] !== undefined) {
                    acc.push(arr[i + 1]);
                }
                break;
            }
            case '--double-prev': {
                if(acc.length === 0 || arr[i-2] === '--discard-next') {
                    continue;
                }
                acc.push(acc[acc.length-1])
                break;
            }
            default:
                acc.push(arr[i]);
        }
    }
    return acc;
};



arr = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
console.log(module.exports(arr))
