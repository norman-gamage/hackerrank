/**
 * Title          Lonely Integer
 * URL            https://www.hackerrank.com/challenges/lonely-integer
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 13
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let N = readNumber(),
    arr = readNumberList();

  // Output
  log(arr.reduce((a, b) => a ^= b));
}