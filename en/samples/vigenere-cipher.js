/**
 * There is a solve of [Vigenère Cipher Helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3) problem from CodeWars.
 */

class VigenereCipher {
  static #keygen = abc => [...Array(abc.length)].map(x => abc[~~(Math.random() * abc.length)]).join``
  #abc = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  #key
  constructor(key, abc = this.#abc) {
    this.#abc = abc;
    this.#key = key || VigenereCipher.#keygen(this.#abc);
  }
  #char(x, i, step) {
    const [key, abc] = [this.#key, this.#abc];
    if (!key || !abc.includes(x)) return x;
    const shift = step * abc.indexOf(key[i % key.length]);
    return abc[(abc.indexOf(x) + shift + abc.length) % abc.length];
  }
  #line(str, step) {
    return str.split``.map((x, i) => this.#char(x, i, step)).join``;
  }
  get key() { return this.#key }
  encode(str) { return this.#line(str, 1) }
  decode(str) { return this.#line(str, -1) }
}

// usage
let code, text = 'I’d far rather be happy than right any day.';

const c1 = new VigenereCipher('douglasadams', 'abcdefghijklmnopqrstuvwxyz');
code = 'I’x qaj uafzhf hp zaspk wvut ragkt sqm jly.';
console.assert(c1.encode(text) === code);
console.assert(c1.decode(code) === text);

const c2 = new VigenereCipher();
code = c2.encode(text);
console.assert(text !== code);
console.assert(c2.decode(code) === text);

const c3 = new VigenereCipher();
console.assert(c1.key !== c2.key);
console.assert(c2.key !== c3.key);
code = c3.encode('Hello, World!'); // 'MLwrE,hbGvyX!' or 'M Trv,YHGLCp!'
console.assert(c3.decode(code) === 'Hello, World!');

const c4 = new VigenereCipher(c2.key);
code = c4.encode(text);
console.assert(text !== code);
console.assert(c2.decode(code) === text);
