/**
 * Title          Sherlock and the Valid String
 * URL            https://www.hackerrank.com/challenges/sherlock-and-valid-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 21
 */

function isValid(s) {
  // Initialisation
  const charCnt = [];
  const aggCnt = Array(s.length).fill(0);

  // Count characters
  s.split('')
    .map((c) => c.charCodeAt(0) - 97)
    .forEach((n) => {
      charCnt[n] = charCnt[n] === undefined ? 1 : charCnt[n] + 1;
    });

  // Aggregate character count
  charCnt.forEach((n) => {
    aggCnt[n] = aggCnt[n] === undefined ? 1 : aggCnt[n] + 1;
  });

  // Find least repeated values
  const mostRepeated = aggCnt.indexOf(Math.max(...aggCnt));
  const leastRepeated = charCnt.filter((x) => x !== mostRepeated);

  // Flags
  const flagEqualCount = leastRepeated.length === 0;
  const flagSingleLeastRepeatedChar = leastRepeated.length === 1;
  const flagAbleToRemoveChar =
    flagSingleLeastRepeatedChar &&
    (leastRepeated[0] === 1 || leastRepeated[0] - mostRepeated === 1);

  // Output
  return flagEqualCount || flagAbleToRemoveChar ? 'YES' : 'NO';
}
