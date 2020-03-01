/**
 * Title          Designer PDF Viewer
 * URL            https://www.hackerrank.com/challenges/designer-pdf-viewer
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 15
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x); // Logging

  let h = readNumberList().map(x => -1 * x);
  const word = readLine().split('').map(x => x.charCodeAt(0) - 97);

  // Filter characters in word
  word.forEach(i => h[i] *= -1);

  // Output
  log(Math.max(...h) * word.length);
}