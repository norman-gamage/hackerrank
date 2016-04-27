/**
 * Title          Angry Professor
 * URL            https://www.hackerrank.com/challenges/angry-professor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var N = Number(readLine()),
    i, t, n, k, arr;

  for (i = 0; i < N; i++) {
    t = readLine().split(' ').map(Number);
    n = t[0];
    k = t[1];
    arr = readLine().split(' ').map(Number);

    // Check + Output
    console.log((arr.filter(function (x) { return x < 1; }).length < k) ? "YES" : "NO");
  }
}