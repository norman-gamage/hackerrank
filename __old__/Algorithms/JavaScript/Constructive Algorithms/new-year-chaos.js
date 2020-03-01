/**
 * Title          New Year Chaos
 * URL            https://www.hackerrank.com/challenges/new-year-chaos
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function minimumBribes(q) {
  const n = q.length;
  let sorted = false;
  let totalBribes = 0;

  // Bubble sort
  while (!sorted) {
    let bribes = 0;
    sorted = true;

    for (let j = 0; j < n - 1; j++) {
      if (bribes > 2) {
        break;
      } else if (q[j] > q[j + 1]) {
        // Swap
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        bribes++;
        sorted = false;
      } else {
        // Reset counter
        totalBribes += bribes;
        bribes = 0;
      }
    }

    // Adjustments
    if (bribes > 2) {
      break;
    } else {
      totalBribes += bribes;
    }
  }

  console.log(sorted ? totalBribes : "Too chaotic");
}
