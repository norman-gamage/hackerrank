/**
 * Title          Quicksort 1 - Partition
 * URL            https://www.hackerrank.com/challenges/quicksort1
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
    arr = readNumberList,
    p = arr[0],
    left = [], right = [];

  // Sorting
  for (let i = 0; i < n; i++) {
    if (arr[i] < p) {
      left.push(arr[i]);
    } else if (arr[i] > p) {
      right.push(arr[i]);
    }
  }
  left.push(p);

  // Output
  log(left.concat(right).join(' '));
} 