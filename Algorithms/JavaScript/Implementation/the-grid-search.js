/**
 * Title          The Grid Search
 * URL            https://www.hackerrank.com/challenges/the-grid-search
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 29
 * 
 * Comments       Fails on test case #5
 */

function main() {
  // Methods
  var findIndices = function (G, P) {
    var indices = [], row, ind, _idx;

    for (row = 0; row < G.length - P.length + 1; row++) {
      _idx = G[row].indexOf(P[0]);
      while (_idx != -1) {
        indices.push([row, _idx]);
        _idx = G[row].indexOf(P[0], _idx + 1);
      }
    }

    return indices;
  }

  // Read input
  var T = Number(readLine()),
    G = [], P = [], pass, i, j, k, t, R, C, row, idx;

  for (i = 0; i < T; i++) {
    t = readLine().split(' ').map(Number);
    R = t[0];
    C = t[1];
    for (j = 0; j < R; j++) {
      G[j] = readLine();
    }

    t = readLine().split(' ').map(Number);
    r = t[0];
    c = t[1];
    for (j = 0; j < r; j++) {
      P[j] = readLine();
    }

    pass = false;

    // Scan for starting indices
    idx = findIndices(G, P);

    // Check for all elements
    for (j = 0; j < idx.length; j++) {
      cnt = 0;
      for (k = 0; k < r; k++) {
        row = G[k + idx[j][0]];

        if (row.indexOf(P[k], idx[j][1]) === idx[j][1]) {
          ++cnt;
        }
      }

      if (cnt === r) {
        pass = true;
      }
    }

    // Output
    console.log((pass) ? "YES" : "NO");
  }
}