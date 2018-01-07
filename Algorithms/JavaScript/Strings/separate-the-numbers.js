/**
 * Title          Separate the Numbers
 * URL            https://www.hackerrank.com/challenges/separate-the-numbers
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const BigNumber = require("bignumber.js");

function separateNumbers(s) {
  let flag = true;

  for (let len = 1; len < s.length - 1; len++) {
    const first = new BigNumber(s.substr(0, len));
    let num = new BigNumber(s.substr(0, len));

    if (s.length <= len) {
      continue;
    }

    let sNew = "".concat(first.toString());

    while (sNew.length < s.length) {
      num = num.add(1);
      sNew = sNew.concat(num.toString());
    }

    if (sNew === s) {
      console.log("YES " + first);
      flag = false;
      continue;
    }
  }

  if (flag) {
    console.log("NO");
  }
}
