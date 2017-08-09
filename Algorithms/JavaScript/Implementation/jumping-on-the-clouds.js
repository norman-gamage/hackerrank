/**
 * Title          Jumping on the Clouds
 * URL            https://www.hackerrank.com/challenges/jumping-on-the-clouds
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

  const n = readNumber();
  const c = readNumberList();

  // Counting
  let i = 0, cnt = 0;

  while (i !== n - 1) {
    if (i + 2 < n && c[i + 2] === 0) {
      i += 2;
    } else {
      i += 1
    }

    cnt++;
  }

  // Output
  log(cnt);
}