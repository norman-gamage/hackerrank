/**
 * Title          Circular Array Rotation
 * URL            https://www.hackerrank.com/challenges/circular-array-rotation
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function processData(input) {
  // Read input
  let line = 0,
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let [n, k, q] = readNumberList();
  let arr = readNumberList();

  // Calculcation
  k = (n - k) % n;
  arr = arr.slice(k).concat(arr.slice(0, k));

  // Output
  for (let i = 0; i < q; i++) {
    log(arr[readNumber()]);
  }
} 