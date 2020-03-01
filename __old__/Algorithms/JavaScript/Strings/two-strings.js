/**
 * Title          Two Strings
 * URL            https://www.hackerrank.com/challenges/two-strings
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Dependencies
  let _ = require('lodash');

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    N = readLine();

  // Processing
  for (let i = 0; i < N; i++) {
    let init,
      first = _.uniq(readLine().split('').map((x) => x.charCodeAt(0))),
      second = _.uniq(readLine().split('').map((x) => x.charCodeAt(0)));

    s = first.concat(second);
    init = s.length;
    s = _.uniq(s);

    // Output
    console.log((s.length < init) ? "YES" : "NO");
  }
} 