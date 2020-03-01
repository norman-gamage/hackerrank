/**
 * Title          Append and Delete
 * URL            https://www.hackerrank.com/challenges/append-and-delete
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function appendAndDelete(s, t, k) {
  const L = s.length + t.length;
  const l = s.length > t.length ? s.length : t.length;

  for (i = 0; s[i] === t[i] && i < l; i++);

  return (L <= k + i * 2 && L % 2 === k % 2) || L < k ? "Yes" : "No";
}
