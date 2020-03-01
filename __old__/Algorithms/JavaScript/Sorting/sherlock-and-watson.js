/**
 * Title          Sherlock and Watson
 * URL            https://www.hackerrank.com/challenges/sherlock-and-watson
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

  let [n, k, q] = readNumberList(),
    arr = readNumberList();

  // Calculcation
  k = (n - k) % n;
  arr = arr.slice(k).concat(arr.slice(0, k));

  // Output
  for (let i = 0; i < q; i++) {
    log(arr[readNumber()]);
  }
} 