/**
 * Title          Strange Counter
 * URL            https://www.hackerrank.com/challenges/strange-code
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function strangeCode(t) {
  let n = 1;
  let v = 3;

  while (n + v <= t) {
    n += v;
    v *= 2;
  }

  v -= t - n;

  return v;
}
