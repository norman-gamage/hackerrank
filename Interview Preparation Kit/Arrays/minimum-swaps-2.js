/**
 * Title          Minimum Swaps 2
 * URL            https://www.hackerrank.com/challenges/minimum-swaps-2
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 07
 */

function minimumSwaps(arr) {
  let cnt = 0;
  arr = arr.map(n => n - 1); // Adjust for zero-index

  for (let i = 0; i < arr.length - 1; i++) {
    // Skip if in correct position
    if (arr[i] === i) continue;

    // Swap with correct value
    const j = arr.indexOf(i, i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
    cnt++;
  }

  // Output
  return cnt;
}
