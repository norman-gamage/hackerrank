/**
 * Title          Arrays: Left Rotation
 * URL            https://www.hackerrank.com/challenges/ctci-array-left-rotation
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 04
 */

function rotLeft(a, d) {
  // Remove full rotations
  d = d % a.length;

  // Output
  return [...a.slice(d), ...a.slice(0, d)];
}
