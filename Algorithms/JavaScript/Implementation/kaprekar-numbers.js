/**
 * Title          Modified Kaprekar Numbers
 * URL            https://www.hackerrank.com/challenges/kaprekar-numbers
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Dependencies
  var BigNumber = require("bignumber.js");

  // Methods
  var numPartition = function (x) {
    var sq, len, d, a, left, right, i;

    if (x.lessThan(10)) {
      return (x.equals(1)) ? true : false;
    }

    sq = x.sqrt();

    x = x.toString();
    len = x.length;

    d = Math.round(len / 2);
    a = [d, len - d];

    for (i = 0; i < a.length; i++) {
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
  var input = input.split('\n'),
    p = Number(input[0]),
    q = Number(input[1]),
    tmp, arr = [], k;

  // Calculcate
  if (p > q) {
    tmp = p;
    p = q;
    q = tmp;
  }

  for (k = p; k <= q; k++) {
    if (numPartition(new BigNumber(Math.pow(k, 2)))) {
      arr.push(k);
    }
  }

  // Output
  console.log((arr.length === 0) ? "INVALID RANGE" : arr.join(' '));
}