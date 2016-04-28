/**
 * Title          Manasa and Stones
 * URL            https://www.hackerrank.com/challenges/manasa-and-stones
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Methods
  var padDigits = function (number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
  }

  // Read input
  var input = input.split('\n'),
    line = 0,
    readLine = function () {
      return input[line++];
    },
    t = readLine(),
    z = 0, i, n, a, b, tmp, j, sum, set;

  // Calculate + Output
  for (i = 0; i < t; i++) {
    n = readLine();
    a = Number(readLine());
    b = Number(readLine());

    if (a > b) {
      tmp = a;
      a = b;
      b = tmp;
    }

    sum = a * (n - 1);

    set = new Set();
    set.add(sum);

    for (j = 0; j < n - 1; j++) {
      sum += b - a;
      set.add(sum);
    }
    console.log(Array.from(set).join(' '));
  }
}