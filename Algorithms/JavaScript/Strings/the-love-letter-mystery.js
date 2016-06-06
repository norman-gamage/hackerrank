/**
 * Title          The Love-Letter Mystery
 * URL            https://www.hackerrank.com/challenges/the-love-letter-mystery
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++],
    n = Number(readLine());

  for (let i = 0; i < n; i++) {
    let s = readLine(), cnt = 0;

    // Calculations
    for (let j = 0; j < Math.floor(s.length / 2); j++) {
      let a = s[j].charCodeAt(0),
        b = s[s.length - 1 - j].charCodeAt(0);

      cnt += Math.abs(a - b);
    }

    // Output
    console.log(cnt);
  }
}