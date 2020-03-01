/**
 * Title          Plus Minus
 * URL            https://www.hackerrank.com/challenges/plus-minus
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let N = Number(readLine()),
    arr = readLine().split(' ').map(Number),
    log = x => console.log(x),
    filter = x => arr.filter(x).length / N;

  // Output
  log(filter(a => a > 0));
  log(filter(a => a < 0));
  log(filter(a => a === 0));
}