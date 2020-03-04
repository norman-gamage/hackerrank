/**
 * Title          2D Array - DS
 * URL            https://www.hackerrank.com/challenges/2d-array
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 04
 */

function hourglassSum(arr) {
  // Calculate sum for an hour-glass
  const hourGlassSum = (x, y) => {
    let sum = arr[x + 1][y + 1];
    for (let i = 0; i < 3; i++) {
      sum += arr[x][y + i];
      sum += arr[x + 2][y + i];
    }
    return sum;
  };

  // All hour-glass sums
  const allSums = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      allSums.push(hourGlassSum(i, j));
    }
  }

  // Output
  return Math.max(...allSums);
}
