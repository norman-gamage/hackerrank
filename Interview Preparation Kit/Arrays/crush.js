/**
 * Title          Array Manipulation
 * URL            https://www.hackerrank.com/challenges/crush
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 07
 */

function arrayManipulation(n, queries) {
  // Initialisations
  const arr = Array(n).fill(0);
  let max = 0;

  // Mark ranges
  queries.forEach(v => {
    const [a, b, k] = v;
    arr[a - 1] += k;
    arr[b] -= k;
  });

  // Aggregate and find max
  for (let i = 1; i < n; i++) {
    arr[i] += arr[i - 1];
    max = Math.max(max, arr[i]);
  }

  // Return
  return max;
}
