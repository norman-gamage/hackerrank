/**
 * Title          Luck Balance
 * URL            https://www.hackerrank.com/challenges/luck-balance
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Jul 13
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
    arr = [], zeroLuck = 0, oneLuck = 0, arrSum = 0;;

  for (let i = 0; i < N; i++) {
    let [L, T] = readNumberList();

    if (T > 0) {
      // Store important cases
      arr.push(L);
    } else {
      // add unimportant cases
      zeroLuck += L;
    }
  }

  // Sorting important cases (ascending order)
  arr.sort((a, b) => a - b);

  if (K < arr.length) {
    // Enough important contests to lose
    while (K--) { oneLuck += arr.pop(); }
    arrSum = (arr.length > 0) ? arr.reduce((a, b) => a + b) : 0;
  } else {
    // Otherwise
    oneLuck = (arr.length > 0) ? arr.reduce((a, b) => a + b) : 0;
    arrSum = 0;
  }

  // Output
  log(oneLuck + zeroLuck - arrSum);
}