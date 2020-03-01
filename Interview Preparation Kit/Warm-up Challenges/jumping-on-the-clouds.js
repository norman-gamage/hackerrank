/**
 * Title          Jumping on the Clouds
 * URL            https://www.hackerrank.com/challenges/jumping-on-the-clouds
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 01
 */

function jumpingOnClouds(c) {
  // Jump count
  const cnt = Array(c.length).fill(0);

  // Initialisation
  cnt[1] = c[1] === 0 ? 1 : Number.MAX_SAFE_INTEGER;

  // Calculate jumps
  for (let i = 2; i < c.length; i++) {
    if (c[i] === 1) {
      cnt[i] = Number.MAX_SAFE_INTEGER;
      continue;
    }

    cnt[i] = Math.min(cnt[i - 1], cnt[i - 2]) + 1;
  }

  // Output
  return cnt[cnt.length - 1];
}
