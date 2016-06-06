/**
 * Title          Anagram
 * URL            https://www.hackerrank.com/challenges/anagram
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  let n = readNumber();

  for (let i = 0; i < n; i++) {
    let s = readLine(),
      len = s.length;

    // Calculcations
    if (len % 2 === 0) {
      let a = s.substring(0, (len / 2)),
        b = s.substring((len / 2), len),
        aLen = a.length,
        bLen = b.length,
        common = Array.from(new Set((a + b).split('').sort())).join(''),
        cnt = 0;

      for (let j = 0; j < common.length; j++) {
        let c = common[j],

          regex = new RegExp(c, "g"),
          aCnt = aLen - (a.replace(regex, '')).length,
          bCnt = bLen - (b.replace(regex, '')).length;

        if (aCnt !== bCnt) {
          cnt += Math.abs(aCnt - bCnt);
        }
      }

      // Output +ve
      log(cnt / 2);
    } else {
      // Output -ve
      log(-1);
    }
  }
} 