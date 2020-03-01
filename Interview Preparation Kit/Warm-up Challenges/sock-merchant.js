/**
 * Title          Sock Merchant
 * URL            https://www.hackerrank.com/challenges/sock-merchant
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 01
 */

function sockMerchant(n, ar) {
  // Map & count
  const map = new Map();
  ar.forEach(v => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  });

  // Extract count
  let cnt = [...map.values()];

  // Calculate pairs per key
  cnt = cnt.map(n => (n / 2) >> 0); // Alt. ~~(n/2)

  // Output
  return cnt.reduce((acc, val) => acc + val, 0);
}
