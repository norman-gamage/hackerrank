/**
 * Title          Happy Ladybugs
 * URL            https://www.hackerrank.com/challenges/happy-ladybugs
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const _ = require("lodash");

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    log = x => console.log(x); // Logging

  const Q = readNumber();

  for (let a0 = 0; a0 < Q; a0++) {
    const n = readNumber();
    const b = readLine()
      .replace(/_/g, "")
      .split("");

    if (b.length === 0) {
      log("YES");
    } else if (b.length === 1) {
      log("NO");
    } else if (b.length === 2) {
      log(b[0] === b[1] ? "YES" : "NO");
    } else {
      const count = _.countBy(b);
      const vals = _.values(count);
      const keys = _.keys(count);

      if (b.length === n) {
        if (vals.includes(1)) {
          log("NO");
          continue;
        }

        let flag = false;

        for (let i = 0; i < b.length - 3; i++) {
          if (b[i] !== b[i + 1] && b[i + 1] !== b[i + 2]) {
            flag = true;
            break;
          }
        }

        log(flag ? "NO" : "YES");
      } else {
        log(vals.includes(1) ? "NO" : "YES");
      }
    }
  }
}
