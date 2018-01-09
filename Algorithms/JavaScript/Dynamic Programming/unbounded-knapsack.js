/**
 * Title          Knapsack
 * URL            https://www.hackerrank.com/challenges/unbounded-knapsack
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function unboundedKnapsack(k, arr) {
  arr = arr.sort((a, b) => a - b);
  arr = Array.from(new Set(arr));

  const n = arr.length;

  let arr2 = [];
  for (let i = 0; i < n; i++) {
    arr2.push(
      Array(1)
        .fill(0)
        .concat(Array(k).fill(0))
    );
  }

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < k + 1; j++) {
      if (j % arr[i] === 0) {
        arr2[i][j] = j / arr[i] * arr[i];
      } else {
        if (i === 0) {
          arr2[i][j] = arr2[i][j - 1];
        } else {
          arr2[i][j] = Math.max(arr2[i][j - 1], arr2[i - 1][j]);

          if (j - arr[i] > 0) {
            arr2[i][j] = Math.max(arr2[i][j], arr2[i][j - arr[i]] + arr[i]);
          }
        }
      }
    }
  }

  return arr2[n - 1][k];
}
