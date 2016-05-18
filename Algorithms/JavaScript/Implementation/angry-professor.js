/**
 * Title          Angry Professor
 * URL            https://www.hackerrank.com/challenges/angry-professor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let N = Number(readLine()),
    n, k, arr;

  for (let i = 0; i < N; i++) {
    [n, k] = readLine().split(' ').map(Number);
    arr = readLine().split(' ').map(Number);

    // Check + Output
    console.log((arr.filter(x => x < 1).length < k) ? "YES" : "NO");
  }
}