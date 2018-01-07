/**
 * Title          Mars Exploration
 * URL            https://www.hackerrank.com/challenges/mars-exploration
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function marsExploration(s) {
  const len = s.length;
  const repeats = len / 3;

  const s_charcode = s.split("").map(x => x.charCodeAt(0));
  const original = "SOS"
    .repeat(repeats)
    .split("")
    .map(x => x.charCodeAt(0));
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    if (s_charcode[i] - original[i] !== 0) {
      ++cnt;
    }
  }

  return cnt;
}
