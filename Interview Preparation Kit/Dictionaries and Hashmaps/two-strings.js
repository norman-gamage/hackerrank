/**
 * Title          Two Strings
 * URL            https://www.hackerrank.com/challenges/two-strings
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 07
 */

function twoStrings(s1, s2) {
  // Remove repeating characters
  s1 = Array.from(new Set(s1.split('')));
  s2 = Array.from(new Set(s2.split('')));

  // Combined string
  let s = [...s1, ...s2];

  // Original length
  const before = s.length;

  // Length after removing characters
  const after = Array.from(new Set(s)).length;

  // Output
  return before !== after ? 'YES' : 'NO';
}
