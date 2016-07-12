/**
 * Title          Jim and the Orders
 * URL            https://www.hackerrank.com/challenges/jim-and-the-orders
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jun 16
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let N = readLine(), arr = [];

  // Time calculation
  for (let z = 0; z < N; z++) {
    let s = readNumberList();
    s[1] += s[0];
    s[0] = z + 1;
    arr.push(s);
  }

  // Ordering
  arr = arr.sort((a, b) => a[1] - b[1]);

  // Output
  log(arr.map(x => x[0]).join(' '));
} 
