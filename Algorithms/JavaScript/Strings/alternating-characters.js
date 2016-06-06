/**
 * Title          Alternating Characters
 * URL            https://www.hackerrank.com/challenges/alternating-characters
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
    N = Number(readLine());

  for (let i = 0; i < N; i++) {
    let s = readLine(), cnt = 0;

    // Counting
    for (let j = 1; j < s.length; j++) {
      if (s[j] === s[j - 1]) {
        cnt++;
      }
    }

    // Output
    console.log(cnt);
  }
} 