/**
 * Title          New Year Chaos
 * URL            https://www.hackerrank.com/challenges/new-year-chaos
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 07
 */

function minimumBribes(q) {
  let bribes = 0;
  q = q.map(n => n - 1); // Adjust for zero-index

  for (let i = q.length - 1; i >= 0; i--) {
    // More than 2 bribes
    if (q[i] - i > 2) {
      console.log('Too chaotic');
      return;
    }

    // How many people bribed and move ahead of a given person
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) bribes++;
    }
  }

  // Output
  console.log(bribes);
}
