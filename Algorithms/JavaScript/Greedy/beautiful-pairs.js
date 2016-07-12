/**
 * Title          Beautiful Pairs
 * URL            https://www.hackerrank.com/challenges/beautiful-pairs
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jun 16
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  const max = 1000;

  let N = readNumber(),
    map1 = readNumberList().sort((a, b) => a - b),
    map2 = readNumberList().sort((a, b) => a - b),
    cnt1 = Array(max).fill(0),
    cnt2 = Array(max).fill(0),
    cnt = Array(max).fill(0);

  // Map values
  for (let i = 0; i < N; i++) {
    cnt1[map1[i] - 1] += 1;
    cnt2[map2[i] - 1] += 1;
  }

  // Minimum
  for (let i = 0; i < max; i++) {
    cnt[i] = Math.min(cnt1[i], cnt2[i]);
  }

  // Sum
  let sum = cnt.reduce((a, b) => a + b);
  if (sum === N) { --sum; }
  else { ++sum; }

  // Output
  log(sum);
}