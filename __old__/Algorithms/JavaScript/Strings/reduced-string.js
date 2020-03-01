/**
 * Title          Super Reduced String
 * URL            https://www.hackerrank.com/challenges/reduced-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function super_reduced_string(s) {
  const len = s.length;

  s = s.split("");

  for (let i = len - 1; i > -1; i--) {
    if (s[i] === s[i - 1]) {
      s.splice(i - 1, 2);
    }
  }

  s = s.join("");

  return s.length === 0 ? "Empty String" : s;
}
