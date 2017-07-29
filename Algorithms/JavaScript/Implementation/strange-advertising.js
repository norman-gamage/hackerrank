/**
 * Title          Viral Advertising
 * URL            https://www.hackerrank.com/challenges/strange-advertising
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 15
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0;
  const readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x); // Logging

  const n = readNumber();
  let m = 5;
  let M = [];

  // Calculations
  for (let i = 0; i < n; i++) {
    m = Math.floor(m / 2);
    M.push(m);
    m *= 3;
  }

  // Output
  log(M.reduce((a, b) => a + b));
}