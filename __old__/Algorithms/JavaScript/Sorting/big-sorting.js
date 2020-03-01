/**
 * Title          Big Sorting
 * URL            https://www.hackerrank.com/challenges/big-sorting
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function bigSorting(arr) {
  arr.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1;
    }

    return a.length - b.length;
  });

  return arr;
}
