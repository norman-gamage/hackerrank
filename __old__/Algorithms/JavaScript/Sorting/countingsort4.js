/**
 * Title          The Full Counting Sort
 * URL            https://www.hackerrank.com/challenges/countingsort4
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 10
 */

function processData(input) {
  // Read input
  let inputArray = input.split('\n'),
    line = 0,
    readLine = () => inputArray[line++],
    readNumber = () => Number(readLine()),
    log = (x) => console.log(x);

  let N = readNumber(),
    nums = [],
    strs = [],
    max = Number.MIN_VALUE,
    output = [];

  // Find max + modify strings of first half
  for (let i = 0; i < N; i++) {
    let [a, b] = readLine().split(" ");
    nums[i] = Number(a);
    strs[i] = (i < (N / 2)) ? "-" : b;
    max = Math.max(nums[i], max);
  }

  // Re-oredering
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < N; j++) {
      if (nums[j] === i) {
        output.push(strs[j]);
      }
    }
  }

  // Output
  log(output.join(' '));
}