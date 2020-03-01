/**
 * Title          Encryption
 * URL            https://www.hackerrank.com/challenges/encryption
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let s = readLine(),
    r = Math.floor(Math.sqrt(s.length)),
    c = Math.ceil(Math.sqrt(s.length)),
    output = "";

  // Encrypt
  for (let i = 0; i < c; i++) {
    let j = i;
    while (j < s.length) {
      output += s[j];
      j += c;
    }
    output += " ";
  }

  // Output
  console.log(output);
}