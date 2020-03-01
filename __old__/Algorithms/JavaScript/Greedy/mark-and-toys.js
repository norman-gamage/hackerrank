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

  // Calculatison
  let M = readNumberList()[1],
    arr = readNumberList().sort((a, b) => a - b),
    sum = 0, i = -1;

  while (sum < M) {
    sum += arr[++i];
  }

  // Output
  log(i);
} 
