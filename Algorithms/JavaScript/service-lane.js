/**
 * Title          Service Lane
 * URL            https://www.hackerrank.com/challenges/service-lane
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var t = readLine().split(' ').map(Number),
    width = readLine().split(' ').map(Number),
    n = t[0], i,
    t = parseInt(t[1]);

  for (i = 0; i < t; i++) {
    var u = readLine().split(' ').map(Number);

    // Calculate + Output
    console.log(width.slice(u[0], u[1] + 1).reduce(function (a, b) { return (a < b) ? a : b; }));
  }
}