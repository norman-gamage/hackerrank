/**
 * Title          Diagonal Difference
 * URL            https://www.hackerrank.com/challenges/diagonal-difference
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var n = Number(readLine()), a = [], i, pri = 0, sec = 0;
  for (i = 0; i < n; i++) {
    a[i] = readLine().split(' ').map(Number);
  }

  // Summing up diagonals
  for (i = 0; i < n; i++) {
    pri += a[i][i];
    sec += a[n - 1 - i][i];
  }

  // Output
  console.log(Math.abs(pri - sec));
}