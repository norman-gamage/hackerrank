/**
 * Title          Sherlock and Squares
 * URL            https://www.hackerrank.com/challenges/sherlock-and-squares
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++],
    N = readLine(), arr, min, max;

  for (let i = 0; i < N; i++) {
    arr = readLine().split(' ').map(Number);

    if (arr[0] < arr[1]) {
      [min, max] = arr;
    } else {
      [max, min] = arr;
    }

    // Calculate + Output
    console.log(Math.floor(Math.sqrt(max)) - Math.ceil(Math.sqrt(min)) + 1);
  }
} 