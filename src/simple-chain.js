const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length || Math.round(position) !== position) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1,1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainFinish = this.chain.map(e => {
      return `( ${e} )~~`
    }).join('').slice(0,-2)
    this.chain = [];
    return chainFinish;
  }
};

module.exports = chainMaker;
const a = chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain();
console.log(a)