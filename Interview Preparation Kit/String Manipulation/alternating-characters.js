/**
 * Title          Alternating Characters
 * URL            https://www.hackerrank.com/challenges/alternating-characters
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 21
 */

function alternatingCharacters(s) {
  // Initialisations
  const len = s.length;
  const reducedStr = [s[0]];

  // Remove adjacent repeating characters
  for (let i = 1; i < len; i++) {
    if (reducedStr[0] === s[i]) continue;
    reducedStr.unshift(s[i]);
  }

  // Output
  return len - reducedStr.length;
}
