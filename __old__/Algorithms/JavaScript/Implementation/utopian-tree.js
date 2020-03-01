/**
 * Title          Utopian Tree
 * URL            https://www.hackerrank.com/challenges/utopian-tree
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let T = Number(readLine()),
    log = x => console.log(x),
    N, h;

  for (let i = 0; i < T; i++) {
    N = Number(readLine());
    h = 1;

    // Output
    if (N === 0) { log(h); }
    else {
      for (let j = 0; j < N; j++) {
        h = (j % 2 === 0) ? h * 2 : h + 1;
      }
      log(h);
    }
  }
}