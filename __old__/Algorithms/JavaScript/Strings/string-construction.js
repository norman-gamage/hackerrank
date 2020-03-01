/**
 * Title          String Construction
 * URL            https://www.hackerrank.com/challenges/string-construction
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const _ = require("lodash");

function stringConstruction(s) {
  return _.uniq(s).length;
}
