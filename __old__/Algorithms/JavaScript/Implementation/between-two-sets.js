/**
 * Title          Between Two Sets
 * URL            https://www.hackerrank.com/challenges/between-two-sets
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const [n, m] = readNumberList();
  const A = readNumberList();
  const B = readNumberList();

  // Counting
  let cnt = 0;

  for (let i = A[n - 1]; i <= B[0]; i++) {
    if (
      (A.map(x => Number((i % x) === 0)).reduce((a, b) => a + b) === n) &&
      (B.map(x => Number((x % i) === 0)).reduce((a, b) => a + b) === m)
    ) {
      ++cnt;
    }
  }

  // Output
  log(cnt);
}