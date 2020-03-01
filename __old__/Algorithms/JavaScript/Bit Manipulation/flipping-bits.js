/**
 * Title          Flipping bits
 * URL            https://www.hackerrank.com/challenges/flipping-bits
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 13
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  let N = readNumber();

  // Output
  for (let z = 0; z < N; z++) {
    let a = ~readNumber();
    log((a < 0) ? a + Math.pow(2, 32) : a);
  }
} 