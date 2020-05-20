/**
 * Title          Merge Sort: Counting Inversions
 * URL            https://www.hackerrank.com/challenges/ctci-merge-sort
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 21
 */

function countInversions(arr) {
  const len = arr.length;
  let output = 0;

  // Increase window size e.g. 2, 4, ... 2*n
  for (let winSize = 1; winSize < len; winSize <<= 1) {
    const _arr = []; // Temporary array
    let _ind = 0; // Temporary array index

    // Loop through each (left) window
    for (let left = 0; left < len; left = left + 2 * winSize) {
      // Right window index
      let right = left + winSize;

      // Maximum index for right window
      const maxRight = Math.min(right + winSize, len);

      // Temporary indexes
      let _left = left;
      let _right = right;

      // Bypass count
      let bypass = 0;

      // Merge sort
      while (_left < right && _right < maxRight) {
        // Left value is bigger than right value
        if (arr[_left] > arr[_right]) {
          // Copy min value to temporary array
          _arr[_ind++] = arr[_right++];

          // Increase swap count
          output += _right - _left - 1 - bypass;

          // Increase bypass count
          bypass += 1;
        }

        // Right value is bigger than left value
        else {
          // Copy min value to temporary array
          _arr[_ind++] = arr[_left++];
        }
      }

      // Fill in leftovers from left window
      while (_left < right) {
        _arr[_ind++] = arr[_left++];
      }

      // Fill in leftovers from right window
      while (_right < maxRight) {
        _arr[_ind++] = arr[_right++];
      }
    }

    // Swap arrays
    arr = _arr;
  }

  // Ouput
  return output;
}
