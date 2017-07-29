/**
 * Title          Migratory Birds
 * URL            https://www.hackerrank.com/challenges/migratory-birds
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  const n = readNumber();
  const types = readNumberList();

  // Frequencies
  let arr = Array(6).fill(0);
  types.forEach((v, i) => {
    arr[types[i]] += 1;
  })

  // Output
  console.log(arr.indexOf(Math.max(...arr)));
}