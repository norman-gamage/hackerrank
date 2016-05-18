/**
 * Title          Cavity Map
 * URL            https://www.hackerrank.com/challenges/cavity-map
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function processData(input) {
  // Read input
  let n = Number(readLine()),
    grid = [], c, u, d, l, r;

  for (let i = 0; i < n; i++) {
    grid[i] = readLine().split('').map(Number);
  }

  // Search
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      c = grid[i][j];
      u = grid[i - 1][j];
      d = grid[i + 1][j];
      l = grid[i][j - 1];
      r = grid[i][j + 1];

      if (c > u && c > d && c > l && c > r) {
        grid[i][j] = 'X';
      }
    }
  }

  // Output
  for (let i = 0; i < n; i++) {
    console.log(grid[i].join(''));
  }
}