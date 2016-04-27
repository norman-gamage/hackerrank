/**
 * Title          Plus Minus
 * URL            https://www.hackerrank.com/challenges/plus-minus
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var n = Number(readLine()),
    arr = readLine().split(' ').map(Number);

  // Output
  console.log(arr.filter(function (a) { return a > 0 }).length / n);
  console.log(arr.filter(function (a) { return a < 0 }).length / n);
  console.log(arr.filter(function (a) { return a === 0 }).length / n);
}