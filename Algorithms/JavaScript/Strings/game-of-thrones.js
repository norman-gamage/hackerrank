/**
 * Title          Game of Thrones - I
 * URL            https://www.hackerrank.com/challenges/game-of-thrones
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Read input
  input = input.split('\n')[0];

  // Checks and calculations
  let A = {}, cnt = 0;
  for (let i = 0; i < input.length; i++) {
    let c = input.charAt(i);
    if (A[c] === undefined) {
      A[c] = 1;
    } else {
      A[c] = (A[c] + 1) % 2;
    }
  }

  for (let i in A) {
    if (A[i] === 1) {
      cnt++;
    }
  }

  // Output
  console.log((cnt > 1) ? "NO" : "YES");
} 