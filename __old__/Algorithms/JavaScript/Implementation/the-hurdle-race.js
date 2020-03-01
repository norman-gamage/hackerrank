/**
 * Title          The Hurdle Race
 * URL            https://www.hackerrank.com/challenges/the-hurdle-race
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 15
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const [n, k] = readNumberList();
  const height = readNumberList();

  // Calculations
  const max = Math.max(...height) - k;

  // Output
  log(max > 0 ? max : 0);
}