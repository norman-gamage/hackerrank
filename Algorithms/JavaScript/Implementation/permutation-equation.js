/**
 * Title          Sequence Equation
 * URL            https://www.hackerrank.com/challenges/permutation-equation
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

process.stdin.on("end", function () {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const n = readNumber();
  const arr = readNumberList();

  // Main loop
  for (let i = 1; i <= n; i++) {
    const ind = 1 + arr.indexOf(i);
    const y = 1 + arr.indexOf(ind);

    // Output
    log(y);
  }
});