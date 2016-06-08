/**
 * Title          Counting Sort 1
 * URL            https://www.hackerrank.com/challenges/countingsort1
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 08
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let n = readNumber(),
    x = readNumberList(),
    cnt = Array(100).fill(0);

  // Count
  for (let i = 0; i < n; i++) {
    cnt[x[i]] += 1;
  }

  // Output
  log(cnt.join(' '));
} 