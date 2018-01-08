/**
 * Title          Max Min
 * URL            https://www.hackerrank.com/challenges/angry-children
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function angryChildren(k, arr) {
  arr.sort((a, b) => a - b);

  const n = arr.length;
  let min = Infinity;

  for (let i = 0; i < n - k + 1; i++) {
    min = Math.min(arr[i + k - 1] - arr[i], min);
  }

  return min;
}
