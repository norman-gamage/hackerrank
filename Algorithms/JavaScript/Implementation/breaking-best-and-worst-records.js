/**
 * Title          Breaking the Records
 * URL            https://www.hackerrank.com/challenges/breaking-best-and-worst-records
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function getRecord(s) {
  const len = s.length;
  let min = s[0];
  let max = s[0];
  let minCnt = 0;
  let maxCnt = 0;

  for (let i = 1; i < len; i++) {
    if (s[i] < min) {
      min = s[i];
      ++minCnt;
    } else if (s[i] > max) {
      max = s[i];
      ++maxCnt;
    } else {
      // do nothing
    }
  }

  return [maxCnt, minCnt];
}