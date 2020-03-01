/**
 * Title          Service Lane
 * URL            https://www.hackerrank.com/challenges/service-lane
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let [N, T] = readLine().split(' ').map(Number),
    width = readLine().split(' ').map(Number);

  for (let i = 0; i < T; i++) {
    let u = readLine().split(' ').map(Number);

    // Calculate + Output
    console.log(width.slice(u[0], u[1] + 1).reduce((a, b) => (a < b) ? a : b));
  }
}