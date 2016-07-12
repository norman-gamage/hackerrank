/**
 * Title          The Maximum Subarray
 * URL            https://www.hackerrank.com/challenges/maxsubarray
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 13
 */

function processData(input) {
  // Methods
  let getContiguous = (arr) => {
    let ans = 0, sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if ((sum + arr[i]) > 0) { sum += arr[i]; }
      else { sum = 0; }
      ans = Math.max(ans, sum);
    }

    return ans;
  }

  let getNonContiguous = (arr) => {
    let nCon = 0;

    for (let i = 0; i < arr.length; i++) {
      nCon += (arr[i] > 0) ? arr[i] : 0;
    }

    return nCon;
  }

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let T = readNumber();

  for (let z = 0; z < T; z++) {
    let N = readNumber(),
      arr = readNumberList(),
      min = Math.min(...arr),
      max = Math.max(...arr);

    if (min < 0 && max < 0) {
      // All negatives
      log(max + " " + max);
    } else if (min > 0 && max > 0) {
      // All positives
      let sum = arr.reduce((a, b) => a + b);
      log(sum + " " + sum);
    } else {
      let nCon = getNonContiguous(arr), // Non-contiguous
        con = getContiguous(arr); // Contiguous

      log(con + " " + nCon);
    }
  }
}