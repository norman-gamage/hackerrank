/**
 * Title          The Coin Change Problem
 * URL            https://www.hackerrank.com/challenges/coin-change
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function getWays(n, c) {
  const m = c.length;
  const arr = [];

  for (let i = 0; i < m; i++) {
    arr.push(
      Array(1)
        .fill(1)
        .concat(Array(n).fill(0))
    );
  }

  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === 0 && j % c[i] === 0) {
        arr[i][j] = 1;
      } else {
        if (i > 0) {
          arr[i][j] = arr[i - 1][j];
          arr[i][j] += j - c[i] > -1 ? arr[i][j - c[i]] : 0;
        }
      }
    }
  }

  console.log(arr[m - 1][n]);
}
