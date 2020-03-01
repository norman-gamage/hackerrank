/**
 * Title          Birthday Cake Candles
 * URL            https://www.hackerrank.com/challenges/birthday-cake-candles
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
  const height = readNumberList();

  // Output
  const max = Math.max(...height);
  log(height.filter(x => x === max).length);
}
