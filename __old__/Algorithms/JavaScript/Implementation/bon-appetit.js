/**
 * Title          Bon Appétit
 * URL            https://www.hackerrank.com/challenges/bon-appetit
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0;
  const readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const [n, k] = readNumberList();
  const c = readNumberList();
  const b = readNumber();

  // Calculation
  const sharedEach = (c.reduce((a, b) => a + b) - c[k]) / 2;

  // Output
  log((sharedEach === b) ? 'Bon Appetit' : (b - sharedEach));
} 