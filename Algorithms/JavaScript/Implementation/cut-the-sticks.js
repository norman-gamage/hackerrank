/**
 * Title          Cut the sticks
 * URL            https://www.hackerrank.com/challenges/cut-the-sticks
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Dependencies
  var _ = require('lodash');

  // Read input
  var n = Number(readLine()),
    arr = readLine().split(' ').map(Number);

  // Output
  while (arr.length > 0) {
    console.log(arr.length);
    arr = _.remove(arr, function (x) {
      return x - _.min(arr) !== 0
    });
  }
}