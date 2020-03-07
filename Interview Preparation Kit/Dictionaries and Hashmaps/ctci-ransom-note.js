/**
 * Title          Hash Tables: Ransom Note
 * URL            https://www.hackerrank.com/challenges/ctci-ransom-note
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 07
 */

function checkMagazine(magazine, note) {
  const hash = new Map();

  // Iterating through magazine
  magazine.forEach(v => {
    hash.set(v, (hash.has(v) ? hash.get(v) : 0) + 1);
  });

  // Iterating through note
  for (let v of note.values()) {
    if (hash.has(v)) {
      hash.set(v, hash.get(v) - 1);
    } else {
      // Missing word
      console.log('No');
      return;
    }
  }

  // Not enough words
  const flag = Array.from(hash.values()).some(n => n < 0);

  // Output
  console.log(flag ? 'No' : 'Yes');
}
