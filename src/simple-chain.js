const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const real_pos = position - 1;
    if(real_pos < 0 || real_pos >= this.getLength() || position === `${position}`) {
      this.chains = [];
      throw new Error();
    }
    this.chains.splice(real_pos, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const finished = this.chains.join('~~');
    this.chains = [];
    return finished;
  }
};

module.exports = chainMaker;
