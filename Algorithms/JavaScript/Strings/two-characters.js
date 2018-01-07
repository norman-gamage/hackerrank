/**
 * Title          Two Characters
 * URL            https://www.hackerrank.com/challenges/two-characters
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const _ = require("lodash");

function twoCharaters(s) {
  const chars = _.uniq(s);
  let max = 0;

  const charPos = function(str, char) {
    return str
      .split("")
      .map(function(c, i) {
        if (c == char) return i;
      })
      .filter(function(v) {
        return v >= 0;
      });
  };

  for (let i = 0; i < chars.length - 1; i++) {
    let a = charPos(s, chars[i]);

    if (a.map((v, i, a) => v - a[i - 1] === 1).indexOf(true) > -1) {
      continue;
    }

    for (let j = i + 1; j < chars.length; j++) {
      let b = charPos(s, chars[j]);

      if (b.map((v, i, a) => v - a[i - 1] === 1).indexOf(true) > -1) {
        continue;
      }

      if (Math.abs(a.length - b.length) > 1 || a.length < b.length) {
        continue;
      }

      if (a[0] > b[0]) {
        continue;
      }

      const len = Math.min(a.length, b.length);
      let flag = false;

      for (let p = 0; p < len; p++) {
        if (a[p] > b[p] || b[p] > a[p + 1]) {
          flag = true;
          break;
        }
      }

      if (flag) {
        continue;
      }

      max = Math.max(max, a.length + b.length);
    }
  }

  return max;
}
