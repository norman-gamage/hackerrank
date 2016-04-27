/**
 * Title          Simple Array Sum
 * URL            https://www.hackerrank.com/challenges/simple-array-sum
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 27
 */

function main() {
  // Read input
  var n = Number(readLine()),
    arr = readLine().split(' ').map(Number);

  // Add using array reduce method + Print output 
  console.log(
    arr.reduce(function (a, b) {
      return a + b;
    })
  );
}