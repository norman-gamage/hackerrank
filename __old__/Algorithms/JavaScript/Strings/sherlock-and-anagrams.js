/**
 * Title          Sherlock and Anagrams
 * URL            https://www.hackerrank.com/challenges/sherlock-and-anagrams
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Methods
  let isAnagram = (a, b) => {
    if (a.length !== b.length) {
      return false;
    } else if (a.length === 1 && b.length === 1) {
      return a === b;
    } else {
      return a === b;
    }
  }

  let getFactorial = (n) => {
    if (n === 0) { return 1; }
    return n * getFactorial(n - 1);
  }

  let getCombinations = (n, k) => {
    return (n === 1) ? 1 : getFactorial(n) / ((getFactorial(k)) * (getFactorial(n - k)));
  }

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()); // Read a single integer

  let N = readNumber();

  // Processing
  for (let i = 0; i < N; i++) {
    let s = readLine(),
      cnt = 0,
      uniq = Array.from(new Set(s)).join('');

    if (uniq.length !== s.length) {
      for (let j = 0; j < uniq.length; j++) {
        let c = uniq[j],
          regex = new RegExp(c, 'g'),
          minCnt = (s.length - s.replace(regex, '').length);

        cnt += (minCnt > 1) ? getCombinations(minCnt, 2) : 0;
      }

      for (let minLen = s.length - 1; minLen > 1; minLen--) {
        let A = [];
        for (let k = 0; k < s.length - minLen + 1; k++) {
          let a = s.substring(k, k + minLen).split('').sort().join('');
          A.push(a);
        }

        for (let k = 0; k < A.length - 1; k++) {
          for (let j = k + 1; j < A.length; j++) {
            if (isAnagram(A[k], A[j])) {
              cnt++;
            }
          }
        }
      }
    }

    // Output
    console.log(cnt);
  }
}