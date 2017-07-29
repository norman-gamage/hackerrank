/**
 * Title          Grading Students
 * URL            https://www.hackerrank.com/challenges/grading
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 14
 */

function solve(grades) {
  grades = grades.map(x => {
    if (x > 37) {
      const nearest = 5 * (Math.floor(x / 5) + 1);
      const diff = nearest - x;
      return (diff < 3) ? nearest : x;
    } else {
      return x;
    }
  });

  return grades.join('\n');
}