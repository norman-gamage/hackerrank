/**
 * Title          Bear and Steady Gene
 * URL            https://www.hackerrank.com/challenges/bear-and-steady-gene
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 08
 */

function processData(input) {
  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  // Methods
  let modDiff = (arr, char, op) => {
    let add = (op === '+') ? +1 : -1;

    switch (char) {
      case 'A': arr[0] += add; break;
      case 'C': arr[1] += add; break;
      case 'T': arr[2] += add; break;
      case 'G': arr[3] += add; break;
      default: break;
    }
  }

  // Read input
  let N = readNumber(),
    s = readLine(),
    max = N / 4,
    diff = [0 - max, 0 - max, 0 - max, 0 - max];

  for (let i = 0; i < N; i++) {
    modDiff(diff, s[i], '+');
  }

  // Balanced sequence check
  if (diff[0] == 0 && diff[1] == 0 && diff[2] == 0 && diff[3] == 0) {
    log(0);
  }

  // Sliding window iterations
  else {
    let minLen = Number.MAX_VALUE,
      head = 0,
      tail = 0;

    while (head < s.length) {
      modDiff(diff, s[head++], '-');

      while (diff[0] <= 0 && diff[1] <= 0 && diff[2] <= 0 && diff[3] <= 0 && tail < head) {
        let temp = head - tail;
        minLen = temp < minLen ? temp : minLen;

        modDiff(diff, s[tail++], '+');
      }
    }

    // Output
    log(minLen);
  }
}