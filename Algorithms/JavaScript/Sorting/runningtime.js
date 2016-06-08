/**
 * Title          Running Time of Algorithms
 * URL            https://www.hackerrank.com/challenges/runningtime
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 08
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let n = readNumber(),
    s = readNumberList(),
    cnt = 0;

  // Sorting
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] > s[i + 1]) {
      let k = i, tmp = s[i + 1];
      while (tmp < s[k]) {
        s[k + 1] = s[k];
        k--;
        cnt++;
      }
      s[k + 1] = tmp;
    }
  }

  // Output
  log(cnt);
} 