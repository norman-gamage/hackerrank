/**
 * Title          Save the Prisoner!
 * URL            https://www.hackerrank.com/challenges/save-the-prisoner
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function main() {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const T = readNumber();

  // Main loop
  for (let t = 0; t < T; t++) {
    const [N, M, S] = readNumberList();
    const a = ((M % N) - 1 + S) % N;

    // Output
    log(a === 0 ? N : a);
  }
}