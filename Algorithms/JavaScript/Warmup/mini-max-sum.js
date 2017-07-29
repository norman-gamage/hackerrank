/**
 * Title          Mini-Max Sum
 * URL            https://www.hackerrank.com/challenges/mini-max-sum
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function main() {
  // Read input
  const readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  let arr = readNumberList();

  // Calculating sums
  const sum = arr.reduce((a, b) => a + b);
  arr = arr.map(x => sum - x);

  // Output
  log(`${Math.min(...arr)} ${Math.max(...arr)}`);
}