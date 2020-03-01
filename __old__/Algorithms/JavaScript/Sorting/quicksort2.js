/**
 * Title          Quicksort 2 - Sorting
 * URL            https://www.hackerrank.com/challenges/quicksort2
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
    arr = readNumberList();

  // Sorting
  let partition = (arr) => {
    let left = [], right = [],
      p = arr[0],
      n = arr.length;

    for (let i = 0; i < n; i++) {
      if (arr[i] < p) {
        left.push(arr[i]);
      } else if (arr[i] > p) {
        right.push(arr[i]);
      }
    }

    if (left.length > 1) {
      left = partition(left);
    }

    if (right.length > 1) {
      right = partition(right);
    }

    left.push(p);

    // Output
    log(left.concat(right).join(' '));

    return left.concat(right);
  }

  partition(arr);
} 