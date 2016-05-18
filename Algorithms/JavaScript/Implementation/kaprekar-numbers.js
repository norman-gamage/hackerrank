/**
 * Title          Modified Kaprekar Numbers
 * URL            https://www.hackerrank.com/challenges/kaprekar-numbers
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Dependencies
  let BigNumber = require("bignumber.js");

  // Methods
  let numPartition = function (x) {
    let sq, len, d, a, left, right;

    if (x.lessThan(10)) {
      return (x.equals(1)) ? true : false;
    }

    sq = x.sqrt();

    x = x.toString();
    len = x.length;

    d = Math.round(len / 2);
    a = [d, len - d];

    for (let i = 0; i < a.length; i++) {
      left = new BigNumber(x.substring(0, a[i]));
      right = new BigNumber(x.substring(a[i], len));

      if (left.equals(0) || right.equals(0)) {
        return false;
      } else if ((left.plus(right)).equals(sq)) {
        return true;
      }
    }
    return false;
  }

  // Read input
  input = input.split('\n');
  let [p, q] = input.map(Number), arr = [];

  // Calculcate
  if (p > q) { [p, q] = [q, p] }

  for (let k = p; k <= q; k++) {
    if (numPartition(new BigNumber(Math.pow(k, 2)))) {
      arr.push(k);
    }
  }

  // Output
  console.log((arr.length === 0) ? "INVALID RANGE" : arr.join(' '));
}