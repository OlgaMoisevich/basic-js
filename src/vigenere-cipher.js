const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error();
    } else {
      let encrypted_string = '';
      let uppercase_message = message.toUpperCase();
      let uppercase_key = key.toUpperCase();

      for (let i = 0, j = 0; i < uppercase_message.length; i += 1, j += 1) {
        if (this.isUppercase(uppercase_message[i])) {
          let result = (uppercase_message[i].charCodeAt() - 65 + uppercase_key[j % uppercase_key.length].charCodeAt() - 65) % 26;
          encrypted_string += String.fromCharCode(result + 65);
        } else {
          encrypted_string += uppercase_message[i];
          j -= 1;
        }
      }
      return this.returnValue(encrypted_string)
    }
  }


  decrypt(encryptedMess, key) {
    if (!encryptedMess || !key) {
      throw Error();
    } else {
      let decrypt_string = '';
      let uppercase_message = encryptedMess.toUpperCase();
      let uppercase_key = key.toUpperCase();

      for (let i = 0, j = 0; i < uppercase_message.length; i += 1, j += 1) {

        if (this.isUppercase(uppercase_message[i])) {
          let result = ((uppercase_message[i].charCodeAt() - 65) - (uppercase_key[j % uppercase_key.length].charCodeAt() - 65) % 26);
          if (result < 0) {
            result = 26 + result;
          }
          decrypt_string += String.fromCharCode(result + 65);
        } else {
          decrypt_string += uppercase_message[i];
          j -= 1;
        }
      }
      return this.returnValue(decrypt_string)
    }
  }

  isUppercase(letter) {
    return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;
  }

  returnValue(string) {
    return this.direct === undefined ? string : string.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
