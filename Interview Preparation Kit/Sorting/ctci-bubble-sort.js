/**
 * Title          Sorting: Bubble Sort
 * URL            https://www.hackerrank.com/challenges/ctci-bubble-sort
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 07
 */

function countSwaps(a) {
  let flag = true;
  let swaps = 0;

  while (flag) {
    flag = false;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swaps++;
        flag = true;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length - 1]}`);
}
