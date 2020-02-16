module.exports = class DepthCalculator {
    a = 1;
    calculateDepth(arr) {
        if (!arr.some(elem => Array.isArray(elem))) {
            const result = this.a;
            this.a = 1;
            return result;
        } else {
            this.a++;
            return this.calculateDepth(arr.flat())
        }
    }
};