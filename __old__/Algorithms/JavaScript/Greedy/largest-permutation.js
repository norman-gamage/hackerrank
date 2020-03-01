/**
 * Title          Largest Permutation
 * URL            https://www.hackerrank.com/challenges/largest-permutation
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 12
 * 
 * Comments       This solution fails in certain test cases
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let [N, K] = readNumberList(),
    arr = readNumberList(),
    cnt = 0,
    sorted_arr = [].concat(arr).sort((a, b) => b - a);

  for (let i = 0; i < N; i++) {
    let current = arr[i],
      big = sorted_arr[0],
      bigIndex = arr.indexOf(big, i);

    // Swaps
    if (big > current) {
      arr[i] = big;
      arr[bigIndex] = current;
      cnt++;

      if (cnt === K) { break; }
    }

    sorted_arr.shift();
  }

  log(arr.join(" "));
}