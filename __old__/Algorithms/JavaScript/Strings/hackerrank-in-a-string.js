/**
 * Title          HackerRank in a String!
 * URL            https://www.hackerrank.com/challenges/hackerrank-in-a-string
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function hackerrankInString(s) {
  const str = "hackerrank";
  let ind = -1;
  let flag = false;

  str.split("").forEach(c => {
    ind = s.indexOf(c, ind);

    if (ind < 0) {
      flag = true;
    }

    ++ind;
  });

  return flag ? "NO" : "YES";
}
