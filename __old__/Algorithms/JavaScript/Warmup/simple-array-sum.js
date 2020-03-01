/**
 * Title          Simple Array Sum
 * URL            https://www.hackerrank.com/challenges/simple-array-sum
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let N = Number(readLine()),
    arr = readLine().split(' ').map(Number);

  // Add using array reduce method + Print output 
  console.log(arr.reduce((a, b) => a + b));
}