/**
 * Title          Insertion Sort - Part 1
 * URL            https://www.hackerrank.com/challenges/insertionsort1
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
    s = readNumberList();

  // Sorting
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] > s[i]) {
      let k = i,
        tmp = s[i];

      while (tmp < s[k - 1]) {
        s[k] = s[k - 1];
        k--;

        // Output
        log(s.join(' '));
      }
      s[k++] = tmp;

      // Output
      log(s.join(' '));
    }
  }
} 