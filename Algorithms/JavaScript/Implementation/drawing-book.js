/**
 * Title          Drawing Book
 * URL            https://www.hackerrank.com/challenges/drawing-book
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 15
 */

function solve(n, p) {
  const front = Math.floor(p / 2);
  const back = Math.floor(n / 2) - front;
  return Math.min(front, back);
}