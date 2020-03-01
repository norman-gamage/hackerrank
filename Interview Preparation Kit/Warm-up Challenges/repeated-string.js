/**
 * Title          Repeated String
 * URL            https://www.hackerrank.com/challenges/repeated-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 01
 */

function repeatedString(s, n) {
  n = BigInt(n);
  const sLen = BigInt(s.length);
  const q = n / sLen; // Quotient
  const r = n % sLen; // Remainder

  // Get number of 'a' characters in a string
  const getNumAChars = str => {
    return BigInt(str.split('').filter(c => c === 'a').length);
  };

  // Number of 'a' characters in repeating section
  const repeat_aCnt = getNumAChars(s) * q;

  // Number of 'a' characters in trailing section
  const trail_aCnt = getNumAChars(s.slice(0, Number(r)));

  // Output
  return repeat_aCnt + trail_aCnt;
}
