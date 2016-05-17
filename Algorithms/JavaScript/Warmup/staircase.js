/**
 * Title          Staircase
 * URL            https://www.hackerrank.com/challenges/staircase
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let N = Number(readLine());

  // Output
  for (let i = 1; i < N + 1; i++) {
    let row = "";
    for (let j = 0; j < N; j++) {
      row += (j < N - i) ? " " : "#";
    }
    console.log(row);
  }
}