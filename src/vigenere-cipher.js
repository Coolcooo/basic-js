const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(direct = true) {
    this.direct = direct;
    this.vocabulary = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  }
  encrypt(message, key) {
   if (key.length < message.length) {
      this.key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    } else {
     this.key = key.toUpperCase();
   }
   this.message = message.toUpperCase();

   let i = -1;
      const encryptMessage =  this.message.split('').map(e => {
       if (this.vocabulary.includes(e)) {
           i++;
           return this.vocabulary[(this.vocabulary.indexOf(e) + this.vocabulary.indexOf(this.key[i])) % 26];
       } else {
           return e;
       }
   });
      if(this.direct) {
          return encryptMessage.join('');
      } else {
          return encryptMessage.reverse().join('');
      }
  }    
  decrypt(message, key) {
      if (key.length < message.length) {
          this.key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
      } else {
          this.key = key.toUpperCase();
      }
      this.message = message.toUpperCase();
      let i = -1;
      const decryptMessage = this.message.split('').map(e => {
          if (this.vocabulary.includes(e)) {
              i++;
              return this.vocabulary[(this.vocabulary.indexOf(e) - this.vocabulary.indexOf(this.key[i]) + 26) % 26];
          } else {
              return e;
          }
      });
      if(this.direct) {
          return decryptMessage.join('');
      } else {
          return decryptMessage.reverse().join('');
      }
  }
}

module.exports = VigenereCipheringMachine;


