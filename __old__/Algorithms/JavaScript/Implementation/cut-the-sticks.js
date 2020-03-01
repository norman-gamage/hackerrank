/**
 * Title          Cut the sticks
 * URL            https://www.hackerrank.com/challenges/cut-the-sticks
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Dependencies
  let _ = require('lodash');

  // Read input
  let n = Number(readLine()),
    arr = readLine().split(' ').map(Number);

  // Output
  while (arr.length > 0) {
    console.log(arr.length);
    arr = _.remove(arr, x => x - _.min(arr) !== 0);
  }
}