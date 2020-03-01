/**
 * Title          Beautiful Triplets
 * URL            https://www.hackerrank.com/challenges/beautiful-triplets
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const [n, d] = readNumberList();
  const arr = readNumberList();
  let cnt = 0;

  // Counting
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < n; k++) {
          if ((arr[k] - arr[j]) === d) {
            cnt++;
          }
        }
      }
    }
  }

  // Output
  log(cnt);
} 