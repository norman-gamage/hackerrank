/**
 * Title          [Algo] Matrix Rotation
 * URL            https://www.hackerrank.com/challenges/matrix-rotation-algo
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function processData(input) {
  // Methods
  let readMatrix = function (aInit, bInit, aMax, bMax) {
    let a = aInit, b = bInit, out = [A[a][b]], i_max;

    if (aMax === 1 || bMax === 1) {
      i_max = (aMax > bMax) ? aMax : bMax;
    } else {
      i_max = (aMax * 2 + bMax * 2) - 4;
    }

    for (let i = 1; i < i_max; i++) {
      if (a === aInit && b < bInit + bMax - 1) { ++b; }
      else if (a < aInit + aMax - 1 && b === bInit + bMax - 1) { ++a; }
      else if (a === aInit + aMax - 1 && b > bInit) { --b; }
      else { --a; }
      out.push(A[a][b]);
    }
    return out;
  }

  let writeMatrix = function (aInit, bInit, aMax, bMax, val) {
    let a = aInit, b = bInit, i_max;
    A[a][b] = val[0];

    if (aMax === 1 || bMax === 1) {
      i_max = (aMax > bMax) ? aMax : bMax;
    } else {
      i_max = (aMax * 2 + bMax * 2) - 4;
    }

    for (let i = 1; i < i_max; i++) {
      if (a === aInit && b < bInit + bMax - 1) { ++b; }
      else if (a < aInit + aMax - 1 && b === bInit + bMax - 1) { ++a; }
      else if (a === aInit + aMax - 1 && b > bInit) { --b; }
      else { --a; }
      A[a][b] = val[i]
    }
  }

  // Read input
  input = input.split("\n");
  let line = 0,
    readLine = () => input[line++],
    [M, N, R] = readLine().split(' ').map(Number),
    A = [], B = [], a, b, m, n, row,
    maxRings = (M < N) ? M / 2 : N / 2;

  // Build matrix
  for (let i = 0; i < M; i++) {
    A.push(readLine().split(' '));
  }

  a = 0; b = 0; m = M; n = N;

  for (let i = 0; i < maxRings; i++) {
    B.push(readMatrix(a, b, m, n));
    a += 1; b += 1; m -= 2; n -= 2;
  }

  // Rotataion
  for (let i = 0; i < B.length; i++) {
    for (let r = 0; r < (R % B[i].length); r++) {
      row = B[i];
      row.push(row.shift());
      B[i] = row;
    }
  }

  a = 0; b = 0; m = M; n = N;

  for (let i = 0; i < maxRings; i++) {
    writeMatrix(a, b, m, n, B[i]);
    a += 1; b += 1; m -= 2; n -= 2;
  }

  // Output
  for (let i = 0; i < A.length; i++) {
    console.log(A[i].join(' '));
  }
}