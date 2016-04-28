/**
 * Title          [Algo] Matrix Rotation
 * URL            https://www.hackerrank.com/challenges/matrix-rotation-algo
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 29
 */

function processData(input) {
  // Methods
  var readMatrix = function (aInit, bInit, aMax, bMax) {
    var a = aInit, b = bInit, out = A[a][b], i_max, i;

    if (aMax === 1 || bMax === 1) {
      i_max = (aMax > bMax) ? aMax : bMax;
    } else {
      i_max = (aMax * 2 + bMax * 2) - 4;
    }

    for (i = 1; i < i_max; i++) {
      if (a === aInit && b < bInit + bMax - 1) { ++b; }
      else if (a < aInit + aMax - 1 && b === bInit + bMax - 1) { ++a; }
      else if (a === aInit + aMax - 1 && b > bInit) { --b; }
      else { --a; }
      out.push(A[a][b]);
    }
    return out;
  }

  var writeMatrix = function (aInit, bInit, aMax, bMax, val) {
    var a = aInit, b = bInit, i_max, i;
    A[a][b] = val[0];

    if (aMax === 1 || bMax === 1) {
      i_max = (aMax > bMax) ? aMax : bMax;
    } else {
      i_max = (aMax * 2 + bMax * 2) - 4;
    }

    for (i = 1; i < i_max; i++) {
      if (a === aInit && b < bInit + bMax - 1) { ++b; }
      else if (a < aInit + aMax - 1 && b === bInit + bMax - 1) { ++a; }
      else if (a === aInit + aMax - 1 && b > bInit) { --b; }
      else { --a; }
      A[a][b] = val[i]
    }
  }

  // Read input
  var input = input.split("\n"),
    line = 0,
    readLine = function () {
      return input[line++];
    },
    l1 = readLine().split(' '),
    M = Number(l1[0]), // rows
    N = Number(l1[1]), // columns
    R = Number(l1[2]), // rotations
    A = [], B = [], a = 0, b = 0,
    i, r, m, n, maxRings, s, row, tmp;

  // Build matrix
  for (i = 0; i < M; i++) {
    A.push(readLine().split(' '));
  }

  m = M;
  n = N;
  maxRings = (M < N) ? M / 2 : N / 2;

  for (i = 0; i < maxRings; i++) {
    s = readMatrix(a, b, m, n);
    a += 1; b += 1; m -= 2; n -= 2;
    B.push(s);
  }

  // Rotataion
  for (i = 0; i < B.length; i++) {
    for (r = 0; r < (R % B[i].length); r++) {
      row = B[i];
      tmp = row.shift();
      row.push(tmp);
      B[i] = row;
    }
  }

  a = 0;
  b = 0;

  for (i = 0; i < maxRings; i++) {
    writeMatrix(a, b, M, N, B[i]);
    a += 1; b += 1; M -= 2; N -= 2;
  }

  // Output
  for (i = 0; i < A.length; i++) {
    console.log(A[i].join(' '));
  }
}