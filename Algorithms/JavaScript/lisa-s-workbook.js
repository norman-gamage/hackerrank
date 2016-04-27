/**
 * Title          Lisa's Workbook
 * URL            https://www.hackerrank.com/challenges/bear-and-workbook
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function processData(input) {
  // Read input
  input = input.split("\n");
  var line = 0,
    readLine = function () {
      return input[line++];
    },
    t = readLine().split(' ').map(Number),

    arr = readLine().split(' ').map(Number),
    C = t[0], P = t[1], pg = 1, cnt = 0,
    max, c, i, j;

  // Calculate + Output
  for (i = 0; i < C; i++) {
    max = arr[i];
    c = 0;

    for (j = 0; j < max; j++) {
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