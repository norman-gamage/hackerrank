/**
 * Title          Flatland Space Stations
 * URL            https://www.hackerrank.com/challenges/flatland-space-stations
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function flatlandSpaceStations(n, c) {
  const left_map = Array(n).fill(-1);
  const right_map = Array(n).fill(-1);
  let max = 0;

  c.forEach(v => {
    left_map[v] = v;
    right_map[v] = v;
  });

  for (let i = 1; i < n; i++) {
    if (left_map[i] === -1) {
      left_map[i] = left_map[i - 1];
    }
  }

  for (let i = n - 2; i > -1; i--) {
    if (right_map[i] === -1) {
      right_map[i] = right_map[i + 1];
    }
  }

  if (c[0] !== 0) {
    c.unshift(0);
  }

  if (c[n - 1] !== n) {
    c.push(n);
  }

  for (let j = 0; j < c.length - 1; j++) {
    for (let i = c[j]; i < c[j + 1]; i++) {
      const left_dist = left_map[i] === -1 ? n : i - left_map[i];
      const right_dist = right_map[i] === -1 ? n : right_map[i] - i;
      const d = left_dist < right_dist ? left_dist : right_dist;

      max = max > d ? max : d;
    }
  }

  return max;
}
