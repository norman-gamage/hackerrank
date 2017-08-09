/**
 * Title          Minimum Distances
 * URL            https://www.hackerrank.com/challenges/minimum-distances
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const n = readNumber();
  const arr = readNumberList();

  // Calculation
  let min = Number.MAX_VALUE;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        min = Math.min(min, Math.abs(i - j));
      }
    }
  }

  // Output
  log((min === Number.MAX_VALUE) ? -1 : min);
}