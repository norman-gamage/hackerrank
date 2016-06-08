/**
 * Title          Closest Numbers
 * URL            https://www.hackerrank.com/challenges/closest-numbers
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
    arr = readNumberList().sort((a, b) => a - b),
    min = Number.MAX_VALUE,
    pairs = [];

  // Sorting
  for (let i = 0; i < n - 1; i++) {
    j = i + 1;
    diff = Math.abs(arr[i] - arr[j]);

    if (diff <= min) {
      if (diff < min) {
        pairs = [];
        min = diff;
      }

      if (arr[i] > arr[j]) {
        pairs.push(arr[j]);
        pairs.push(arr[i]);
      } else {
        pairs.push(arr[i]);
        pairs.push(arr[j]);
      }
    }
  }

  // Ouput
  log(pairs.join(' '));
} 