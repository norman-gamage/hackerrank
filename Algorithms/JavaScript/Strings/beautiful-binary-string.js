/**
 * Title          Beautiful Binary String
 * URL            https://www.hackerrank.com/challenges/beautiful-binary-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function beautifulBinaryString(b) {
  let cnt = 0;

  while (b.indexOf("01010") > -1) {
    b = b.replace("01010", "01110");
    ++cnt;
  }

  while (b.indexOf("010") > -1) {
    b = b.replace("010", "011");
    ++cnt;
  }

  return cnt;
}
