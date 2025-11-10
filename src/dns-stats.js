const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  for (let i of domains) {
    let n = i.split('.').reverse()
    let s = ''
    for (let j of n){
      s += `.${j}`;
      if (! (s in result) ) {
        result[s] = 1
        }
      else {
        result[s] += 1
        }
      }
    }
    return result;
}

module.exports = {
  getDNSStats
};
