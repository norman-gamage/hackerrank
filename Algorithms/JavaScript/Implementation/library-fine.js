/**
 * Title          Library Fine
 * URL            https://www.hackerrank.com/challenges/library-fine
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Read input
  var t1 = readLine().split(' ').map(Number),
    d1 = t1[0],
    m1 = t1[1],
    y1 = t1[2],
    t2 = readLine().split(' ').map(Number),
    d2 = t2[0],
    m2 = t2[1],
    y2 = t2[2],
    sameY = (y1 === y2),
    sameM = (m1 === m2),
    sameD = (d1 === d2);

  // Calculate + Output
  if (y1 > y2 && !sameY) {
    console.log(10000 * (y1 - y2));
  } else if (m1 > m2 && !sameM && sameY) {
    console.log(500 * (m1 - m2));
  } else if (d1 > d2 && !sameD && sameM && sameY) {
    console.log(15 * (d1 - d2));
  } else {
    console.log(0);
  }
}