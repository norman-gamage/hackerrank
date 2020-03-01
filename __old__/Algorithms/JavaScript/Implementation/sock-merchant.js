/**
 * Title          Sock Merchant
 * URL            https://www.hackerrank.com/challenges/sock-merchant
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

  const n = readNumber();
  const c = readNumberList();

  // Calculation
  let arr = Array(Math.max(...c) + 1).fill(0);
  for (let i = 0; i < n; i++) {
    ++arr[c[i]];
  }

  // Output
  log(arr.filter(x => x > 0).map(x => Math.floor(x / 2)).reduce((a, b) => a + b));
}