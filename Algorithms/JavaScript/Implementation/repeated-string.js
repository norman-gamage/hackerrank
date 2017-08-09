/**
 * Title          Repeated String
 * URL            https://www.hackerrank.com/challenges/repeated-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 Aug 09
 */

function main() {
  // Read input
  const readNumber = () => Number(readLine()), // Read a single integer
    log = (x) => console.log(x);

  const s = readLine();
  const n = readNumber();

  // Calculations
  const len = s.length;
  const aLen = s.replace(/a/g, '1').replace(/\D/g, '').length;

  // Edge case #1
  if (aLen === 0) {
    log(0);
  } 
  
  // Edge case #2
  else if (aLen === len) {
    log(n)
  }
  
  // Regular case
  else {
    const r = Math.floor(n / len);
    const c = n - (r * len);

    // Output
    log(r * aLen + s.slice(0, c).replace(/a/g, '1').replace(/\D/g, '').length);
  }
}