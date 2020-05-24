/**
 * Title          Common Child
 * URL            https://www.hackerrank.com/challenges/common-child
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 25
 */

function commonChild(s1, s2) {
  // Initialisations
  const len = s1.length + 1;
  const arr = new Array(len).fill(0).map(() => new Array(len).fill(0));

  // Loop through DP array
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      // if characters match -> Increase up-left count
      // Otherwise -> Max from either up or left count
      arr[i][j] =
        s1[i - 1] === s2[j - 1]
          ? (arr[i - 1][j - 1] += 1)
          : Math.max(arr[i - 1][j], arr[i][j - 1]);
    }
  }

  // Output
  return arr[len - 1][len - 1];
}
