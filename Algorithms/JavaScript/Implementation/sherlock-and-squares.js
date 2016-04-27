/**
 * Title          Sherlock and Squares
 * URL            https://www.hackerrank.com/challenges/sherlock-and-squares
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function processData(input) {
  // Read input
  var input = input.split('\n'),
    line = 0,
    readLine = function () {
      return input[line++];
    },
    N = readLine(),
    i, arr, min, max;

  for (i = 0; i < N; i++) {
    arr = readLine().split(' ').map(Number);

    if (arr[0] < arr[1]) {
      min = arr[0];
      max = arr[1];
    } else {
      min = arr[1];
      max = arr[0];
    }

    // Calculate + Output
    console.log(Math.floor(Math.sqrt(max)) - Math.ceil(Math.sqrt(min)) + 1);
  }
} 