/**
 * Title          Kangaroo
 * URL            https://www.hackerrank.com/challenges/kangaroo
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function main() {
  // Read input
  const readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const [x1, v1, x2, v2] = readNumberList();

  // Output
  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) {
    log('NO');
  } else {
    if ((x1 - x2) % (v2 - v1) === 0) {
      log('YES');
    } else {
      log('NO');
    }
  }
}