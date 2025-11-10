const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if(str.length === 0) return ''
    
    let currChar = str.charAt(0)
    let count = 1
    let encoding = ''
    
    for(let i = 1; i < str.length; i++) {
        const char = str.charAt(i)
        if(char === currChar) count++
        else {
            if (count === 1) {
                encoding +=  currChar
            }
            else {
                encoding += count + currChar
            }
            
            // сброс
            count = 1
            currChar = char
        }
    }
    if (count === 1) {
        encoding +=  currChar
    }
    else {
        encoding +=  count + currChar
    }
    
    return encoding
}

module.exports = {
  encodeLine
};
