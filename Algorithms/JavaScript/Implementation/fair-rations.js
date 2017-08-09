/**
 * Title          Fair Rations
 * URL            https://www.hackerrank.com/challenges/fair-rations
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const N = readNumber();
  const B = readNumberList().map(x => x % 2);

  // Negative case
  if (B.reduce((a, b) => a + b) % 2 === 1) {
    log('NO');
  }

  // Positive case
  else {
    let ind = [];
    B.forEach((v, i) => ind[i] = v * i);
    ind = ind.filter(x => x > 0)

    if (B[0] === 1) {
      ind.unshift(0);
    }

    let cnt = 0;
    for (let i = 0; i < ind.length; i += 2) {
      cnt += 2 * (ind[i + 1] - ind[i]);
    }

    // Output
    log(cnt)
  }
}