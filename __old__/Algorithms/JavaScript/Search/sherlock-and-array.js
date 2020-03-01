/**
 * Title          Sherlock and Array
 * URL            https://www.hackerrank.com/challenges/sherlock-and-array
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Dependencies  
  let BigNumber = require('bignumber.js');

  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let n = readLine();

  for (let z = 0; z < n; z++) {
    let m = readNumber(),
      arr = readNumberList(),
      pass = false;

    // Edge case: Only one (1) number
    if (m == 1) { log("YES"); }

    // Edge case: Only two (2) numbers
    else if (m < 3) { log("NO"); }

    // General case
    else {
      let left = new BigNumber(arr[0]),
        right = new BigNumber(0);

      for (let p = 2; p < m; p++) {
        right = right.plus(arr[p]);
      }

      for (i = 1; i <= m - 2; i++) {
        if (i > 1) {
          right = right.minus(arr[i]);
          left = left.plus(arr[i - 1]);
        }

        if (left.equals(right)) { pass = true; }
      }

      // Output
      log((pass) ? "YES" : "NO");
    }
  }
}