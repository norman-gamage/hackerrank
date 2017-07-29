/**
 * Title          Birthday Chocolate
 * URL            https://www.hackerrank.com/challenges/the-birthday-bar
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function getWays(squares, d, m) {
  const len = squares.length - m + 1;
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    if (squares.slice(i, i + m).reduce((a, b) => a + b) === d) {
      ++cnt;
    }
  }

  return cnt;
}