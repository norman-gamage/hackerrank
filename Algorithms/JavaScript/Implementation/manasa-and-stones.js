/**
 * Title          Manasa and Stones
 * URL            https://www.hackerrank.com/challenges/manasa-and-stones
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Methods
  let padDigits = (number, digits) => Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++],
    t = readLine(),
    z = 0, n, a, b, sum, set;

  // Calculate + Output
  for (let i = 0; i < t; i++) {
    n = readLine();
    a = Number(readLine());
    b = Number(readLine());
    set = new Set();

    if (a > b) {
      [a, b] = [b, a]
    }

    sum = a * (n - 1);
    set.add(sum);

    for (let j = 0; j < n - 1; j++) {
      sum += b - a;
      set.add(sum);
    }
    console.log(Array.from(set).join(' '));
  }
}