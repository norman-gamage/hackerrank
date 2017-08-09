/**
 * Title          Bigger is Greater
 * URL            https://www.hackerrank.com/challenges/bigger-is-greater
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function processData(input) {
  // Methods
  const step1 = (s) => {
    for (let i = s.length - 1; i > -1; i--) {
      if (s[i] < s[i + 1]) {
        return i;
      }
    }
    return -1;
  }

  const step2 = (s, i) => {
    let max = -1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] > s[i]) {
        max = Math.max(j, max);
      }
    }
    return max;
  }

  const step3 = (s, i) => {
    return s.slice(0, i + 1).concat(s.slice(i + 1).sort()).join('');
  }

  const swap = (s, i, j) => {
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    return s;
  }

  const isSameCharString = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] !== s[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  const t = readNumber();

  // Main loop
  for (let z = 0; z < t; z++) {
    let s = readLine().split('');

    // Special case: String length = 1
    if (s.length === 1) {
      log('no answer');
      continue;
    }

    // Special case: String length = 2
    if (s.length === 2) {
      if (s[0] === s[1]) {
        log('no answer');
      } else {
        log((s[1] > s[0]) ? s.reverse().join('') : 'no answer');
      }
      continue;
    }

    // Sepcial case: Same character repeated strings
    if (isSameCharString(s)) {
      log('no answer');
      continue;
    }

    /* Next permutation algorithm */

    // Step #1: Find starting index of right most descending string
    let i = step1(s);
    if (i < 0) {
      log('no answer');
      continue;
    }

    // Step #2: Find index of bigger character to the right
    let j = step2(s, i);

    // Step #3: Swap
    s = swap(s, i, j);

    // Step #4: Sort latter half
    s = step3(s, i);

    // Output
    log(s);
  }
} 