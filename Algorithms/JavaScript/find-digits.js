/**
 * Title          Find Digits
 * URL            https://www.hackerrank.com/challenges/find-digits
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var T = Number(readLine()),
    i, j, N, arr, cnt;

  for (i = 0; i < T; i++) {
    N = Number(readLine());
    arr = N.toString().replace("0", "").split("");
    cnt = 0;

    // Count
    for (j = 0; j < arr.length; j++) {
      cnt = (N % arr[j] === 0) ? ++cnt : cnt;
    }

    // Output
    console.log(cnt);
  }
}