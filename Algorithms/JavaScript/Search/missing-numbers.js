/**
 * Title          Missing Numbers
 * URL            https://www.hackerrank.com/challenges/missing-numbers
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function missingNumbers(arr, brr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });

  brr = brr.sort((a, b) => {
    return a - b;
  });

  const N = arr.length;
  const M = brr.length;

  let i, j;
  const list = new Set();

  for (i = 0, j = 0; i < N, j < M; i++, j++) {
    if (arr[i] === brr[j]) {
      //do nothing
    } else {
      if (arr[i] < brr[j]) {
        list.add(arr[i]);
        j--;
      } else {
        list.add(brr[j]);
        i--;
      }
    }
  }

  if (i !== N) {
    list.add(arr.slice(i));
  }

  if (j !== M) {
    list.add(brr.slice(j));
  }

  return Array.from(list);
}
