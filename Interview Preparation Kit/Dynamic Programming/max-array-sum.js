/**
 * Title          Max Array Sum
 * URL            https://www.hackerrank.com/challenges/max-array-sum
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 31
 */

function maxSubsetSum(arr) {
  // Initialisations
  arr[1] = Math.max(arr[0], arr[1]);
  let max = arr[1];

  // Main loop
  for (let i = 2; i < arr.length; i++) {
    // Current max is either,
    // a) Current value + 2-indices before i.e. arr[i] + arr[i-2]
    // b) Current value i.e. arr[i]
    // c) Current max
    arr[i] = Math.max(arr[i - 2] + arr[i], arr[i], max);
    max = Math.max(arr[i], max);
  }

  // Output
  return max;
}
