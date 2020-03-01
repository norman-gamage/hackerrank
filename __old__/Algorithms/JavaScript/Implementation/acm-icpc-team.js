/**
 * Title          ACM ICPC Team
 * URL            https://www.hackerrank.com/challenges/acm-icpc-team
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let N = readLine().split(' ').map(Number),
    [n, m] = N, t, c,
    topic = [], max = -1, maxCnt = 0;

  for (let i = 0; i < n; i++) {
    topic[i] = readLine();
  }

  // Calculate
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      t = [];
      for (let k = 0; k < m; k++) {
        t.push(topic[i][k] | topic[j][k]);
      }

      c = t.join('').replace(/0/g, '').length;

      if (c > max) {
        max = c;
        maxCnt = 0;
      }

      maxCnt = (c === max) ? ++maxCnt : maxCnt;
    }
  }

  // Output
  console.log(max + "\n" + maxCnt);
}