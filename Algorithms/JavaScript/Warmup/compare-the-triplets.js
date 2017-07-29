/**
 * Title          Compare the Triplets
 * URL            https://www.hackerrank.com/challenges/compare-the-triplets
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function main() {
  // Read input
  const readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const A = readNumberList();
  const B = readNumberList();
  const len = A.length;
  let score = [0, 0];

  // Score count
  for (let i = 0; i < len; i++) {
    if (A[i] > B[i]) {
      ++score[0];
    } else if (A[i] < B[i]) {
      ++score[1];
    } else {
      // do nothing
    }
  }

  // Output
  log(score.join(' '));
}