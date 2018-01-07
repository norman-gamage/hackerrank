/**
 * Title          Day of the Programmer
 * URL            https://www.hackerrank.com/challenges/day-of-the-programmer
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function solve(year) {
  if (year < 1918) {
    return year % 4 === 0 ? "12.09." + year : "13.09." + year;
  } else if (year === 1918) {
    return "26.09.1918";
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return "12.09." + year;
    } else {
      return "13.09." + year;
    }
  }
}
