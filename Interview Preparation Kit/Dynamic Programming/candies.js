/**
 * Title          Candies
 * URL            https://www.hackerrank.com/challenges/candies
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 31
 */

function candies(n, arr) {
  // Initialisations
  const arr1 = Array(n).fill(1); // Left-to-right
  const arr2 = Array(n).fill(1); // Right-to-left
  let output = 0;

  // Main loop
  for (let i = 1; i < n; i++) {
    // Left-to-right calculation
    if (arr[i] > arr[i - 1]) arr1[i] = arr1[i - 1] + 1;

    // Right-to-left calculation
    if (arr[n - i - 1] > arr[n - i]) arr2[n - i - 1] = arr2[n - i] + 1;
  }

  // Pick max
  for (let i = 0; i < n; i++) output += arr1[i] > arr2[i] ? arr1[i] : arr2[i];

  // Output
  return output;
}
