/**
 * Title          Picking Numbers
 * URL            https://www.hackerrank.com/challenges/picking-numbers
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const _ = require("lodash");

function pickingNumbers(a) {
  const keys = _.uniq(a).sort((a, b) => b - a);
  const count = _.countBy(a);
  let max = 0;
  let pairs = 0;

  if (keys.length === 1) {
    console.log(count[keys[0]]);
  } else {
    for (let i = 0; i < keys.length - 1; i++) {
      if (keys[i] - keys[i + 1] === 1) {
        const sum = count[keys[i]] + count[keys[i + 1]];

        max = Math.max(sum, max);
        ++pairs;
      }
    }

    console.log(pairs === 1 ? max + 1 : max);
  }
}
