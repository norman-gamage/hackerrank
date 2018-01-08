/**
 * Title          Connected Cells in a Grid
 * URL            https://www.hackerrank.com/challenges/connected-cell-in-a-grid
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function connectedCell(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const recur = (r, c, ref) => {
    if (matrix[r][c] === 1) {
      matrix[r][c] = ref;

      if (r > 0) {
        recur(r - 1, c, ref);
      }

      if (r < m - 1) {
        recur(r + 1, c, ref);
      }

      if (c > 0) {
        recur(r, c - 1, ref);
      }

      if (c < n - 1) {
        recur(r, c + 1, ref);
      }

      if (r > 0 && c > 0) {
        recur(r - 1, c - 1, ref);
      }

      if (r > 0 && c < n - 1) {
        recur(r - 1, c + 1, ref);
      }

      if (r < m - 1 && c > 0) {
        recur(r + 1, c - 1, ref);
      }

      if (r < m - 1 && c < n - 1) {
        recur(r + 1, c + 1, ref);
      }

      return true;
    }
    return false;
  };

  let ref = 2;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (recur(r, c, ref)) {
        ref++;
      }
    }
  }

  let sum = Array(ref).fill(0);

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] > 0) {
        sum[matrix[r][c]] += 1;
      }
    }
  }

  return Math.max(...sum);
}
