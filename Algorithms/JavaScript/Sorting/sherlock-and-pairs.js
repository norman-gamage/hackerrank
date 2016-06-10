/**
 * Title          Sherlock and Pairs
 * URL            https://www.hackerrank.com/challenges/sherlock-and-pairs
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++],
    log = (x) => console.log(x);

  let N = Number(readLine());

  for (let i = 0; i < N; i++) {
    let n = Number(readLine()),
      arr = readLine().split(" ").map(Number),
      matchCount = 0,
      refCount = Array(Math.max(...arr) + 1).fill(0);

    // Reference count
    for (let j = 0; j < n; j++) {
      refCount[arr[j]] += 1;
    }

    // Counting matching pairs
    for (let j = 0; j < refCount.length; j++) {
      if (refCount[j] < 2) {
        // do nothing
      } else {
        matchCount += refCount[j] * (refCount[j] - 1);
      }
    }

    // Output
    log(matchCount);
  }
}