/**
 * Title          Counting Valleys
 * URL            https://www.hackerrank.com/challenges/counting-valleys
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

  const N = readNumber();
  const arr = readLine().split('').map(x => {
    return (x === 'U') ? +1 : -1;
  });

  // Counting
  let h = 0;
  let cnt = 0;

  arr.forEach(v => {
    if (h === 0 && v < 0) {
      ++cnt;
    }
    h += v;
  });

  // Output
  log(cnt);
} 