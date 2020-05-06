/**
 * Title          Count Triplets
 * URL            https://www.hackerrank.com/challenges/count-triplets-1
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 07
 */

function countTriplets(arr, r) {
  const leftMap = new Map();
  const rightMap = new Map();
  let output = 0;

  // Initial right map
  for (let i = 1; i < arr.length; i++) {
    rightMap.set(arr[i], rightMap.has(arr[i]) ? rightMap.get(arr[i]) + 1 : 1);
  }

  // Initial left map
  leftMap.set(arr[0], 1);

  for (let i = 1; i < arr.length - 1; i++) {
    // Triplet values
    const curr = arr[i];
    const left = curr / r;
    const right = curr * r;

    // Update left map i.e. add previous value
    if (i > 1) {
      const prev = arr[i - 1];
      leftMap.set(prev, leftMap.has(prev) ? leftMap.get(prev) + 1 : 1);
    }

    // Update right map i.e. remove current value
    rightMap.set(curr, rightMap.get(arr[i]) - 1);

    // Get counts
    const leftCnt = leftMap.get(left) || 0;
    const rightCnt = rightMap.get(right) || 0;

    // Compute combinations
    output += leftCnt * rightCnt;
  }

  // Output
  return output;
}
