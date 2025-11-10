const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  for (let num=1; num<n; num*=10) {
      max = Math.max(Math.floor(n / 10 / num) * num + n % num, max);
  }
  return max;
}

module.exports = {
  deleteDigit
};
