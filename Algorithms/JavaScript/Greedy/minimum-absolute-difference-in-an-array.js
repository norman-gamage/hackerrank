/**
 * Title          Minimum Absolute Difference in an Array
 * URL            https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function minimumAbsoluteDifference(n, arr) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = Math.abs(arr[i] - arr[i + 1]);
  }

  return Math.min(...arr);
}
