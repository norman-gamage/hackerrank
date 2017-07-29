/**
 * Title          Cats and a Mouse
 * URL            https://www.hackerrank.com/challenges/cats-and-a-mouse
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

  const q = readNumber();

  for (let i = 0; i < q; i++) {
    const [x, y, z] = readNumberList();

    // Distance calculations
    const distX = Math.abs(x - z);
    const distY = Math.abs(y - z);

    // Output
    if (distX === distY) {
      log('Mouse C')
    } else {
      log((distX < distY) ? 'Cat A' : 'Cat B')
    }
  }
}