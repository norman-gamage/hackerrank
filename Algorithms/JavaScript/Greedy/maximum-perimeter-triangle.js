/**
 * Title          Maximum Perimeter Triangle
 * URL            https://www.hackerrank.com/challenges/maximum-perimeter-triangle
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function maximumPerimeterTriangle(l) {
  l = l.sort((a, b) => b - a);

  const n = l.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (l[i] < l[j] + l[k]) {
          return [l[k], l[j], l[i]];
        }
      }
    }
  }

  return [-1];
}
