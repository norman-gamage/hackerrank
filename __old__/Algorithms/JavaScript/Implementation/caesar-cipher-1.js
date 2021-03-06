/**
 * Title          Caesar Cipher
 * URL            https://www.hackerrank.com/challenges/caesar-cipher-1
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let n = Number(readLine()),
    s = readLine(),
    k = Number(readLine()),
    e = [], c;

  // Encoding
  for (let i = 0; i < n; i++) {
    c = s.charCodeAt(i);
    k %= 26;

    if (c > 64 && c < 91) {
      c += k;
      if (c > 90) { c -= 26; }
    } else if (c > 96 && c < 123) {
      c += k;
      if (c > 122) { c -= 26; }
    } else {
      // Do nothing
    }
    e.push(String.fromCharCode(c));
  }

  // Output
  console.log(e.join(''));
}