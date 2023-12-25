const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(count){
    this.count = 1;
    this.max = this.count;
  }
  
  calculateDepth(arr) {
    for (let elem of arr){
        if (elem instanceof Array) {
            this.count += 1;
            this.calculateDepth(elem);
        }
    
    }
    this.max = Math.max(this.max, this.count);
    this.count = 1;
    return this.max;
  }
}

module.exports = {
  DepthCalculator
};
