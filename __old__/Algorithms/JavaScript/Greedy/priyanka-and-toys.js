/**
 * Title          Priyanka and Toys
 * URL            https://www.hackerrank.com/challenges/priyanka-and-toys
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 16
 */

function main() {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let N = readNumber(),
    arr = readNumberList().sort((a, b) => a - b),
    cnt = 0, j = 4, w;

  // Calculation
  for (let i = 0; i < N; i++) {
    if (i === 0) {
      w = arr[i];
      cnt++;
    } else {
      if (w <= arr[i] && arr[i] <= w + 4) {
        // do nothing
      } else {
        w = arr[i];
        cnt++;
      }
    }
  }

  // Output
  log(cnt);
}