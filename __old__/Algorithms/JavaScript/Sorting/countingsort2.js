/**
 * Title          Counting Sort 2
 * URL            https://www.hackerrank.com/challenges/countingsort2
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 May 08
 */

function processData(input) {
  // Input
  input = input.split('\n')[1].split(' ');

  // Output
  console.log(input.sort((a, b) => a - b).join(' '));
} 