/**
 * Title          Sansa and XOR
 * URL            https://www.hackerrank.com/challenges/sansa-and-xor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function sansaXor(arr) {
  const n = arr.length;

  if (n % 2 === 0) {
    return 0;
  }

  let output = 0;

  for (let i = 0; i < n; i += 2) {
    output ^= arr[i];
  }

  return output;
}
