/**
 * Title          Fibonacci Modified
 * URL            https://www.hackerrank.com/challenges/fibonacci-modified
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

const BigNumber = require("bignumber.js");

function fibonacciModified(t1, t2, n) {
  t1 = new BigNumber(t1);
  t2 = new BigNumber(t2);

  const f = function(a, b) {
    return b.times(b).plus(a);
  };

  let o = new BigNumber(0);
  for (let i = 2; i < n; i++) {
    o = f(t1, t2);
    t1 = t2;
    t2 = o;
  }

  return o.toFixed(0);
}
