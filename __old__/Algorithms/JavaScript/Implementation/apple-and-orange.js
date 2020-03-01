/**
 * Title          Apple and Orange
 * URL            https://www.hackerrank.com/challenges/apple-and-orange
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

  const [s, t] = readNumberList();
  const [a, b] = readNumberList();
  const [m, n] = readNumberList();
  let apple = readNumberList();
  let orange = readNumberList();

  // Calculation
  apple = apple.map(x => a + x).map(x => s <= x && x <= t).filter(x => x === true);
  orange = orange.map(x => b + x).map(x => s <= x && x <= t).filter(x => x === true);

  // Output
  log(apple.length);
  log(orange.length);
}