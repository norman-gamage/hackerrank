/**
 * Title          Two arrays
 * URL            https://www.hackerrank.com/challenges/two-arrays
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

  let T = parseInt(readLine(), 10);

  for (let z = 0; z < T; z++) {
    let [N, K] = readLine().split(' '),
      A = readNumberList().sort((a, b) => a - b),
      B = readNumberList().sort((a, b) => a - b),
      arr = [],
      pass = true;

    // Add up arrays
    for (let i = 0; i < A.length; i++) {
      arr[i] = [];
      for (let j = 0; j < B.length; j++) {
        arr[i][j] = A[i] + B[j];
      }
    }

    // Check values
    for (let i = 0; i < B.length; i++) {
      if (arr[A.length - i - 1][i] < K) {
        pass = false;
        break;
      }
    }

    log((pass) ? 'YES' : 'NO');
  }
} 
