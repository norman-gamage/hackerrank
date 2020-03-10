/**
 * Title          Sherlock and Anagrams
 * URL            https://www.hackerrank.com/challenges/sherlock-and-anagrams
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 Mar 10
 */

function sherlockAndAnagrams(s) {
  const hashMap = new Map();

  // Get hash for a given string
  const getHash = s => {
    const arr = Array(26).fill(0);
    s.split('')
      .map(c => c.charCodeAt(0) - 97)
      .forEach(n => {
        arr[n] += 1;
      });
    return arr.join('');
  };

  // Loop - String window
  for (let w = 1; w < s.length; w++) {
    // Loop - Index
    for (let i = 0; i < s.length - w + 1; i++) {
      // Substring
      const subString = s.substring(i, i + w);

      // Hash for substring
      const hash = getHash(subString);

      // Populate hash-map
      hashMap.set(hash, hashMap.has(hash) ? hashMap.get(hash) + 1 : 1);
    }
  }

  // Filter repeating hashes
  const repeatingHashes = Array.from(hashMap.values()).filter(n => n > 1);

  // Anagram count
  const permutations = repeatingHashes.map(n => (n * (n - 1)) / 2);

  // Output
  return permutations.reduce((a, c) => a + c, 0);
}
