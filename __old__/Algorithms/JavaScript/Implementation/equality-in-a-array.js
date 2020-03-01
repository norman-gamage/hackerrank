/**
 * Title          Equalize the Array
 * URL            https://www.hackerrank.com/challenges/equality-in-a-array
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const n = readNumber();
  const arr = readNumberList();

  // Counting 
  let c = Array(Math.max(...arr) + 1).fill(0);

  for (let i = 0; i < n; i++) {
    c[arr[i]]++;
  }

  // Output
  log(n - Math.max(...c));
} 