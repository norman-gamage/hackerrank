/**
 * Title          Library Fine
 * URL            https://www.hackerrank.com/challenges/library-fine
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let [d1, m1, y1] = readLine().split(' ').map(Number),
    [d2, m2, y2] = readLine().split(' ').map(Number),
    [sameY, sameM, sameD] = [(y1 === y2), (m1 === m2), (d1 === d2)],
    log = x => console.log(x);

  // Calculate + Output
  if (y1 > y2 && !sameY) {
    log(10000 * (y1 - y2));
  } else if (m1 > m2 && !sameM && sameY) {
    log(500 * (m1 - m2));
  } else if (d1 > d2 && !sameD && sameM && sameY) {
    log(15 * (d1 - d2));
  } else {
    log(0);
  }
}