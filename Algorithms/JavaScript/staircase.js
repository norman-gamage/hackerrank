/**
 * Title          Staircase
 * URL            https://www.hackerrank.com/challenges/staircase
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var n = Number(readLine());

  // Output
  var i, j, row;
  for (i = 1; i < n + 1; i++) {
    row = "";
    for (j = 0; j < n; j++) {
      row += (j < n - i) ? " " : "#";
    }
    console.log(row);
  }
}