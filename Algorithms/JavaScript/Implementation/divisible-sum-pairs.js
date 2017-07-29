/**
 * Title          Divisible Sum Pairs
 * URL            https://www.hackerrank.com/challenges/divisible-sum-pairs
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

  const [n, k] = readNumberList();
  const arr = readNumberList();
  let cnt = 0;

  // Counting
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        ++cnt;
      }
    }
  }

  // Output
  log(cnt);
}