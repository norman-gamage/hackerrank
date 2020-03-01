/**
 * Title          Counting Valleys
 * URL            https://www.hackerrank.com/challenges/counting-valleys
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 01
 */

function countingValleys(n, s) {
  s = s.split("");
  let prev = 0; // Previous altitude
  let curr = 0; // Current altitude
  let cnt = 0; // Valley count

  s.forEach(v => {
    // Shift altitudes
    prev = curr;

    // Calculate new altitude
    curr += v === "U" ? 1 : -1;

    // Back to sea-level check
    if (prev === -1 && curr === 0) {
      cnt += 1;
    }
  });

  // Output
  return cnt;
}
