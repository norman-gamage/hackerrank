/**
 * Title          Gemstones
 * URL            https://www.hackerrank.com/challenges/gem-stones
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 June 06
 */

function processData(input) {
  // Input
  input = input.split('\n');
  let line = 0,
    readLine = () => input[line++],
    N = Number(readLine());

  // Calculations
  let A = [], len = Infinity, min = -1, mainCnt = 0;

  for (let z = 0; z < N; z++) {
    let s = readLine(),
      tmp = new Set(s.split('').sort());

    A.push(tmp);

    if (tmp.size < len) {
      len = tmp.size;
      min = z;
    }
  }

  A[0].forEach((c) => {
    let cnt = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i].has(c) === true) {
        cnt++
      }
    }

    if (cnt === A.length - 1) {
      mainCnt++;
    }
  });

  // Output
  console.log(mainCnt);
} 