/**
 * Title          Candies
 * URL            https://www.hackerrank.com/challenges/candies
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function candies(n, arr) {
  let left = Array(n).fill(1);
  let right = Array(n).fill(1);
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }

  for (let i = n - 2; i > -1; i--) {
    if (arr[i] > arr[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    cnt += Math.max(left[i], right[i]);
  }

  return cnt;
}
