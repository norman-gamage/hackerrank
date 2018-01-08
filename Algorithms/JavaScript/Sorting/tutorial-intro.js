/**
 * Title          Intro to Tutorial Challenges
 * URL            https://www.hackerrank.com/challenges/tutorial-intro
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function introTutorial(V, arr) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  let mid = (left + right) / 2;

  if (n === 1) {
    return arr[0] === V ? 0 : -1;
  } else if (n === 2) {
    return arr[0] === V ? 0 : 1;
  } else {
    while (left <= right) {
      if (arr[mid] === V) {
        return mid;
        break;
      } else if (arr[mid] > V) {
        right = mid - 1;
      } else if (arr[mid] < V) {
        left = mid + 1;
      }

      if (left > right) {
        return -1;
      }

      mid = Math.round((left + right) / 2);
    }
  }
}
