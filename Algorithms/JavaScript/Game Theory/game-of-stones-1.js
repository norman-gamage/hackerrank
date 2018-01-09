/**
 * Title          Game of Stones
 * URL            https://www.hackerrank.com/challenges/game-of-stones-1
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function gameOfStones(n) {
  return n % 7 < 2 ? "Second" : "First";
}
