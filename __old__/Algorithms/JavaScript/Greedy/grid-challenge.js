/**
 * Title          Grid Challenge
 * URL            https://www.hackerrank.com/challenges/grid-challenge
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

  let T = readNumber();

  for (let z = 0; z < T; z++) {
    let N = readNumber(),
      G = [], H = [],
      pass = true;

    // Rows
    for (let i = 0; i < N; i++) {
      G.push(readLine().split('').sort());
    }

    // Column-wise reordering
    for (let i = 0; i < N; i++) {
      H.push([]);
      for (let j = 0; j < N; j++) {
        H[i].push(G[j][i].charCodeAt(0));
      }
    }

    // Check lexicographically ordering column-wise
    for (let i = 0; i < N; i++) {
      let c = H[i].map(a => a >= H[i][0]).reduce((a, b) => a & b)
      pass = c & pass;
    }

    // Output
    log((pass) ? 'YES' : 'NO');
  }
}