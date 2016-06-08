/**
 * Title          Counting Sort 3
 * URL            https://www.hackerrank.com/challenges/countingsort3
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
    arr = Array(100).fill(0);

  // Sorting
  for (let i = 0; i < n; i++) {
    let c = Number(readLine().split(' ')[0]);
    arr[c] = (arr[c] === 0) ? 1 : ++arr[c];
  }

  for (let i = 1; i < 100; i++) {
    arr[i] += arr[i - 1];
  }

  // Output
  log(arr.join(' '));
} 