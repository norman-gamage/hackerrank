/**
 * Title          Chocolate Feast
 * URL            https://www.hackerrank.com/challenges/chocolate-feast
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var T = Number(readLine()),
    i, t, n, c, m, w, numC, r;

  // Calculate + Output
  for (i = 0; i < T; i++) {
    t = readLine().split(' ').map(Number);
    n = t[0];
    c = t[1];
    m = t[2];

    numC = w = Math.floor(n / c);

    while (w >= m) {
      r = Math.floor(w / m);
      w = Math.floor(w % m) + r;
      numC += r;
    }

    console.log(numC);
  }
}