/**
 * Title          Ice Cream Parlor
 * URL            https://www.hackerrank.com/challenges/icecream-parlor
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let T = readNumber();

  for (let z = 0; z < T; z++) {
    let M = readNumber(),
      N = readNumber(),
      arr = readNumberList(),
      done = false;

    // Processing and calculations
    for (let i = 0; i < N - 1; i++) {
      if (arr[i] < M) {
        for (let j = i + 1; j < N; j++) {
          if (arr[j] < M) {
            let sum = arr[i] + arr[j];

            if (sum === M) {
              // Output
              if (i < j) {
                log((i + 1) + " " + (j + 1));
              } else {
                log((j + 1) + " " + (i + 1));
              }
              done = true;
              break;
            }
          }
        }
      }

      if (done) { break; }
    }
  }
}