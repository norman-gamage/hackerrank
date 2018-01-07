/**
 * Title          Forming a Magic Square
 * URL            https://www.hackerrank.com/challenges/magic-square-forming
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function formingMagicSquare(s) {
  s = s.reduce(function(a, b) {
    return a.concat(b);
  }, []);

  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const all = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];

  const diff = [];

  all.forEach(v => {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += Math.abs(v[i] - s[i]);
    }

    diff.push(sum);
  });

  return Math.min(...diff);
}
