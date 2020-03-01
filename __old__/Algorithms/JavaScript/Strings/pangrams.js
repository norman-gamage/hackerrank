/**
 * Title          Pangrams
 * URL            https://www.hackerrank.com/challenges/pangrams
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Input
  input = input.split('\n')[0].replace(/\s/g, '').toLowerCase();

  // String -> set
  let s = new Set(input.split(''));

  // Output
  console.log((s.size === 26) ? "pangram" : "not pangram");
}