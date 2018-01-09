/**
 * Title          Sum vs XOR
 * URL            https://www.hackerrank.com/challenges/sum-vs-xor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function solve(n) {
  let c = 0;

  while (n) {
    c += n % 2 ? 0 : 1;
    n = Math.floor(n / 2);
  }

  return Math.pow(2, c);
}
