/**
 * Title          ACM ICPC Team
 * URL            https://www.hackerrank.com/challenges/acm-icpc-team
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Read input
  var N = readLine().split(' ').map(Number),
    n = N[0],
    m = N[1],
    topic = [],
    max = -1,
    maxCnt = 0, 
    i, j, k, t, c;

  for (i = 0; i < n; i++) {
    topic[i] = readLine();
  }

  // Calculate
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      t = [];
      for (k = 0; k < m; k++) {
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
  console.log(max);
  console.log(maxCnt);
}