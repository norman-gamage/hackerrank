/**
 * Title          A Chessboard Game
 * URL            https://www.hackerrank.com/challenges/a-chessboard-game-1
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function chessboardGame(x, y) {
  x %= 4;
  y %= 4;
  return y == 0 || y == 3 || x == 0 || x == 3 ? "First" : "Second";
}
