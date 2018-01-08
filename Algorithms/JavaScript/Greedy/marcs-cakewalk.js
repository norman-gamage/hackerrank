/**
 * Title          Marc's Cakewalk
 * URL            https://www.hackerrank.com/challenges/marcs-cakewalk
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function marcsCakewalk(calorie) {
  return calorie
    .sort((a, b) => b - a)
    .map((v, i) => v * Math.pow(2, i))
    .reduce((a, b) => a + b);
}
