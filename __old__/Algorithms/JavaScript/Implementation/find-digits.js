/**
 * Title          Find Digits
 * URL            https://www.hackerrank.com/challenges/find-digits
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let T = Number(readLine()),
    N, arr, cnt;

  for (let i = 0; i < T; i++) {
    N = Number(readLine());
    arr = N.toString().replace("0", "").split("");
    cnt = 0;

    // Count
    for (let j = 0; j < arr.length; j++) {
      cnt = (N % arr[j] === 0) ? ++cnt : cnt;
    }

    // Output
    console.log(cnt);
  }
}