/**
 * Title          Jumping on the Clouds: Revisited
 * URL            https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const [n, k] = readNumberList();
  const C = readNumberList();

  // Calculations
  let i = k % n, E = 100 - ((C[i] * 2) + 1);

  while (i !== 0) {
    i = (i + k) % n;
    E = E - ((C[i] * 2) + 1);
  }

  // Output
  log(E);
}
