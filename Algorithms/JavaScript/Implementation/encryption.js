/**
 * Title          Encryption
 * URL            https://www.hackerrank.com/challenges/encryption
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Read input
  var s = readLine(),
    r = Math.floor(Math.sqrt(s.length)),
    c = Math.ceil(Math.sqrt(s.length)),
    i, j, output = "";

  // Encrypt
  for (i = 0; i < c; i++) {
    j = i;
    while (j < s.length) {
      output += s[j];
      j += c;
    }
    output += " ";
  }

  // Output
  console.log(output);
}