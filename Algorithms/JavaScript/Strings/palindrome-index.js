/**
 * Title          Palindrome Index
 * URL            https://www.hackerrank.com/challenges/palindrome-index
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Methods
  let isPalindrome = (x) => {
    return (x.length === 0) ? false : x === x.split('').reverse().join('');
  }

  // Read input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++], // Read a string
    readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x),
    N = readNumber();

  for (let z = 0; z < N; z++) {
    let s = readLine();

    // Checks and calculations
    if (!isPalindrome(s)) {
      for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
          let ss = s.substring(0, i).concat(s.substring(i + 1, s.length)),
            pass = isPalindrome(ss);

          // Output +ve
          log((pass) ? i : s.length - 1 - i);
          break;
        }
      }
    } else {
      // Output -ve
      log(-1)
    }
  }
} 