const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
        arr.splice(0, 1)
        }
    if (arr[arr.length-1] === '--double-next' ||  arr[arr.length] === '--discard-next') {
        arr.splice(arr.length-1, 1)
        }
    else {
    for(let i=0; i<=arr.length; i+=1) {
      if (arr[i] === '--discard-next'){
          arr.splice(i,2)
            }
      if (arr[i] === '--discard-prev'){
          arr.splice(i-1,2)
            }
      if (arr[i] === '--double-next'){
          arr.splice(i, 2, arr[i+1],arr[i+1])
            }
      if (arr[i] === '--double-prev'){
          arr.splice(i, 1, arr[i-1])
        }
    }
}

return arr
}
throw new Error("'arr' parameter must be an instance of the Array!")
}
module.exports = {
  transform
};
