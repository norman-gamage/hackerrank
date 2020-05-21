/**
 * Title          Strings: Making Anagrams
 * URL            https://www.hackerrank.com/challenges/ctci-making-anagrams
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 21
 */

function makeAnagram(a, b) {
  // Get character count for a string
  const getCharCnt = (s) => {
    const cnt = Array(26).fill(0);
    s.split('')
      .map((c) => c.charCodeAt(0) - 97)
      .forEach((n) => {
        cnt[n] += 1;
      });
    return cnt;
  };

  // Character counts
  const aCnt = getCharCnt(a);
  const bCnt = getCharCnt(b);

  // Find difference
  const diff = [];

  for (let i = 0; i < 26; i++) {
    diff[i] = Math.abs(aCnt[i] - bCnt[i]);
  }

  // Output
  return diff.reduce((a, b) => a + b);
}
