/**
 * Title          Pairs
 * URL            https://www.hackerrank.com/challenges/pairs
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function pairs(k, arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });

  const N = arr.length;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    let t = arr[i] + k;
    let j = i + 1;

    while (t >= arr[j]) {
      j++;
    }

    if (t === arr[j - 1]) {
      cnt++;
    }
  }

  return cnt;
}
