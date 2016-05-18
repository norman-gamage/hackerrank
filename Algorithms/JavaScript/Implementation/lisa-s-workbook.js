/**
 * Title          Lisa's Workbook
 * URL            https://www.hackerrank.com/challenges/bear-and-workbook
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function processData(input) {
  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++],
    [C, P] = readLine().split(' ').map(Number),
    arr = readLine().split(' ').map(Number),
    pg = 1, cnt = 0, max, c;

  // Calculate + Output
  for (let i = 0; i < C; i++) {
    max = arr[i];
    c = 0;

    for (let j = 0; j < max; j++) {
      if (pg === j + 1) { cnt++ };
      c++;

      if (c === P && j !== max - 1) {
        pg++;
        c = 0;
      }
    }
    pg++;
  }

  console.log(cnt);
}