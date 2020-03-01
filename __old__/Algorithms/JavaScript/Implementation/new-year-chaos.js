/**
 * Title          New Year Chaos
 * URL            https://www.hackerrank.com/challenges/new-year-chaos
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function main() {
  // Methods
  let shift = function (arr, s, e) {
    let tmp = arr[s];
    arr.copyWithin(s, s + 1, e + 1);
    arr[e] = tmp;
    return arr;
  }

  // Read input
  let readNumber = () => Number(readLine()), // Read a single integer
    readNumberList = () => readLine().split(' ').map(Number), // Read multiple integers
    log = (x) => console.log(x);

  let T = readNumber();

  for (let i = 0; i < T; i++) {
    let n = readNumber(),
      q = readNumberList(),
      sorted = false,
      totalBribes = 0;

    // Bubble sort
    while (!sorted) {
      sorted = true;
      let bribes = 0;

      for (let j = 0; j < n - 1; j++) {
        // Exit if exceed max bribes
        if (bribes > 2) {
          break;
        }
        // Swap
        else if (q[j] > q[j + 1]) {
          [q[j], q[j + 1]] = [q[j + 1], q[j]];
          bribes++;
          sorted = false;
        }
        // Reset counter
        else {
          totalBribes += bribes;
          bribes = 0;
        }
      }

      // Exit if exceed max bribes
      if (bribes > 2) {
        break;
      } else {
        totalBribes += bribes;
      }
    }

    // Output
    log((sorted) ? totalBribes : "Too chaotic");
  }
}