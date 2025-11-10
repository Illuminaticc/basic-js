const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
      this.type = type;
  }
  encrypt(cipher_text,key) {
      if (!cipher_text || !key) {
          throw new Error('Incorrect arguments!');
      }
      while (key.length < cipher_text.length) {
        key += key;
       }
      let text= '';
      cipher_text = cipher_text.toUpperCase()
      key = key.toUpperCase()
      let j = 0;
      for (let i = 0; i < cipher_text.length; i+=1)
      {
      if (cipher_text.charCodeAt(i) > 64 && cipher_text.charCodeAt(i) < 91){
          let x = (cipher_text[i].charCodeAt(0) + key[j].charCodeAt(0)) %26;
          x += 'A'.charCodeAt(0);
          text+=String.fromCharCode(x);
          j+=1;
        }
      else {
          text += cipher_text[i]
        }
      }
  if (this.type === false) {
    return text.split('').reverse().join('');;
  }
  return text;
}
  decrypt(cipher_text,key) {
      if (!cipher_text || !key) {
          throw new Error('Incorrect arguments!');
      }
      while (key.length < cipher_text.length) {
        key += key;
       }
      
      let orig_text="";
      cipher_text = cipher_text.toUpperCase()
      key = key.toUpperCase()
      let j = 0;
      for (let i = 0 ; i < cipher_text.length ; i+=1)
      {
        if (cipher_text.charCodeAt(i) > 64 && cipher_text.charCodeAt(i) < 91) {
            let x = (cipher_text[i].charCodeAt(0) -
                    key[j].charCodeAt(0) + 26) %26;
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
            j+=1;
          }
        else {
            orig_text += cipher_text[i]
        }
      }
  if (this.type === false) {
    return orig_text.split('').reverse().join('');
  }
  return orig_text;
}
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
