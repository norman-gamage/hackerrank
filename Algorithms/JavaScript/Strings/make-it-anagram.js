/**
 * Title          Make it Anagram
 * URL            https://www.hackerrank.com/challenges/make-it-anagram
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let [a, b] = input,
    aLen = a.length,
    bLen = b.length,
    common = Array.from(new Set((a + b).split('').sort())).join(''),
    cnt = 0;

  // Processing
  for (let i = 0; i < common.length; i++) {
    let c = common[i],
      regex = new RegExp(c, "g"),
      aCnt = aLen - (a.replace(regex, '')).length,
      bCnt = bLen - (b.replace(regex, '')).length;

    if (aCnt !== bCnt) {
      cnt += Math.abs(aCnt - bCnt);
    }
  }

  // Output
  console.log(cnt);
} 