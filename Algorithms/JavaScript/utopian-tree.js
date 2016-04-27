/**
 * Title          Utopian Tree
 * URL            https://www.hackerrank.com/challenges/utopian-tree
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var T = Number(readLine()),
    i, j, n, h;

  for (i = 0; i < T; i++) {
    n = Number(readLine());
    h = 1;

    // Output
    if (n === 0) {
      console.log(h);
    } else {
      for (j = 0; j < n; j++) {
        h = (j % 2 === 0) ? h * 2 : h + 1;
      }
      console.log(h);
    }
  }
}