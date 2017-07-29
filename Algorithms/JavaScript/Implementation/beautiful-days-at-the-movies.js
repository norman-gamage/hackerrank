/**
 * Title          Beautiful Days at the Movies
 * URL            https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
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
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const [i, j, k] = readNumberList();
  let cnt = 0;

  for (let p = i; p <= j; p++) {
    // Reversing
    const q = Number(p.toString().split('').reverse().join(''));

    // Check
    if (Math.abs(p - q) % k === 0) {
      ++cnt;
    }
  }

  // Output
  log(cnt);
} 