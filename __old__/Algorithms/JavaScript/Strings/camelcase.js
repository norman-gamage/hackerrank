/**
 * Title          CamelCase
 * URL            https://www.hackerrank.com/challenges/camelcase
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function camelcase(s) {
  return (
    1 +
    s
      .split("")
      .map(x => (x.charCodeAt(0) < 91 ? 1 : 0))
      .reduce((a, b) => a + b)
  );
}
