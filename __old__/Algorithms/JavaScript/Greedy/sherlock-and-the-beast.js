/**
 * Title          Sherlock and The Beast
 * URL            https://www.hackerrank.com/challenges/sherlock-and-the-beast
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 16
 */

function main() {
  // Read input
  let readNumber = () => Number(readLine()), // Read a single integer
    log = x => console.log(x);

  var N = readNumber();

  for (let i = 0; i < N; i++) {
    let n = Number(readLine()),
      n3 = n, n5 = n,
      five = 0, three = 0;

    // Count repeating patterns
    while (n3 > 2 && n5 > 2) {
      if (n5 % 3 === 0) {
        five = (n5 / 3);
        three = (n - n5) / 5;
        break;
      }

      if (n3 % 3 === 0) {
        five = (n3 / 3);
        three = (n - n3) / 5;
        break;
      }

      n5 -= 5;
      n3 -= 3;
    }

    // Output
    if (five === 0 && three === 0) {
      if (n % 5 === 0) {
        log("33333".repeat(n / 5));
      } else if (n % 3 === 0) {
        log("555".repeat(n / 3));
      } else {
        log(-1);
      }
    } else {
      log("555".repeat(five) + "33333".repeat(three));
    }
  }
}