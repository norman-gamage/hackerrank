/**
 * Title          Maximizing XOR
 * URL            https://www.hackerrank.com/challenges/maximizing-xor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 13
 */

function maxXor(l, r) {
  let max = 0;

  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      max = Math.max(i ^ j, max);
    }
  }

  return max;
}