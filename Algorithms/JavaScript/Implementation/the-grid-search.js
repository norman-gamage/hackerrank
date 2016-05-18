/**
 * Title          The Grid Search
 * URL            https://www.hackerrank.com/challenges/the-grid-search
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 * 
 * Comments       Fails on test case #5
 */

function main() {
  // Methods
  let findIndices = (G, P) => {
    let indices = [], ind, _idx;

    for (let row = 0; row < G.length - P.length + 1; row++) {
      _idx = G[row].indexOf(P[0]);
      while (_idx != -1) {
        indices.push([row, _idx]);
        _idx = G[row].indexOf(P[0], _idx + 1);
      }
    }

    return indices;
  }

  // Read input
  let T = Number(readLine()),
    G = [], P = [], pass, t, row, idx;

  for (let i = 0; i < T; i++) {
    [R, C] = readLine().split(' ').map(Number);
    for (let j = 0; j < R; j++) {
      G[j] = readLine();
    }

    [r, c] = readLine().split(' ').map(Number);
    for (let j = 0; j < r; j++) {
      P[j] = readLine();
    }

    pass = false;

    // Scan for starting indices
    idx = findIndices(G, P);

    // Check for all elements
    for (let j = 0; j < idx.length; j++) {
      cnt = 0;
      for (let k = 0; k < r; k++) {
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