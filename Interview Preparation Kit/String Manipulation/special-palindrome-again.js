/**
 * Title          Special String Again
 * URL            https://www.hackerrank.com/challenges/special-palindrome-again
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 23
 */

function substrCount(n, s) {
  let output = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Left string
      const leftStr = s.substring(i, j + 1);
      const isRepeatingChar = leftStr.split('').every((c) => c === s[i]);

      // Is left string has same repeatng character ?
      if (isRepeatingChar) output++;
      else break;

      // Right string
      const p = j + 2;
      const q = p + (j - i) + 1;
      const rightStr = s.substring(p, q);

      // Is left and right strings same;
      // while separater character is different ?
      if (leftStr === rightStr && s[j + 1] !== leftStr[0]) {
        output++;
      }
    }
  }

  // Output
  return output;
}
