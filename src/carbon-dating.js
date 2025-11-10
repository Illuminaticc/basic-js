const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (String(sampleActivity) !== sampleActivity) {
    return false;
  }
  if (isNaN(Number(sampleActivity))) {
    return false
  }
  if (Number(sampleActivity) > 0.1  && Number(sampleActivity) <15) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k
    return Math.ceil(t);
  }
  return false
}
module.exports = {
  dateSample
};
