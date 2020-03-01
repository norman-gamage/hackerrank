/**
 * Title          Funny String
 * URL            https://www.hackerrank.com/challenges/funny-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Methods
  let absDiff = (x) => Math.abs(x.charCodeAt(0) - x.charCodeAt(1));

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++],
    readNumber = () => Number(readLine());

  let n = readNumber();

  for (let i = 0; i < n; i++) {
    let s = readLine(),
      r = s.split('').reverse().join(''),
      _s = [], _r = [],
      pass = true;

    // Calculations
    for (let j = 0; j < s.length - 1; j++) {
      _s.push(s.substring(j, j + 2));
      _r.push(r.substring(j, j + 2));
    }

    _s = _s.map(absDiff);
    _r = _r.map(absDiff);

    for (let j = 0; j < _s.length - 1; j++) {
      if (_s[j] !== _r[j]) {
        pass = false;
      }
    }

    // Output
    console.log((pass) ? "Funny" : "Not Funny");
  }
} 