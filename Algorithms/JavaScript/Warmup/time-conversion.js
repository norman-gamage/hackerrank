/**
 * Title          time-conversion
 * URL            https://www.hackerrank.com/challenges/time-conversion
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        2.0
 * Last Update    2016 May 18
 */

function main() {
  // Read input
  let time = readLine();

  // AM/PM to 24-hour
  let h = Number(time.substring(0, 2)) % 12;
  h += (time.charAt(8) === 'P') ? 12 : 0;

  // Output
  console.log(((h < 10) ? "0" : "") + h.toString() + time.substring(2, 8));
}