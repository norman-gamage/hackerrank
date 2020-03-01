/**
 * Title          Count Luck
 * URL            https://www.hackerrank.com/challenges/count-luck
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 08
 */

function countLuck(matrix, k) {
  const N = matrix.length;
  const M = matrix[0].length;
  let arr = [];
  let p = [];
  let end = [];

  const isSamePoint = (p1, p2) => {
    return p1[0] === p2[0] && p1[1] === p2[1];
  };

  for (let i = 0; i < matrix.length; i++) {
    let l = matrix[i].split("");

    if (l.indexOf("M") > -1) {
      p = [i, l.indexOf("M")];
    }
    if (l.indexOf("*") > -1) {
      end = [i, l.indexOf("*")];
    }

    arr.push(l);
  }

  let prev = [];
  let backlog = [];
  let cnt = 0;
  let cnt_log = [];

  while (!isSamePoint(p, end)) {
    let u = p[0] > 0 ? [p[0] - 1, p[1]] : [],
      d = p[0] < N - 1 ? [p[0] + 1, p[1]] : [],
      l = p[1] > 0 ? [p[0], p[1] - 1] : [],
      r = p[1] < M - 1 ? [p[0], p[1] + 1] : [];

    u = prev.indexOf(u.join("-")) > -1 ? [] : u;
    d = prev.indexOf(d.join("-")) > -1 ? [] : d;
    l = prev.indexOf(l.join("-")) > -1 ? [] : l;
    r = prev.indexOf(r.join("-")) > -1 ? [] : r;

    let dirs = [];

    if (u.length > 0 && arr[u[0]][u[1]] !== "X") {
      dirs.push(u);
    }

    if (d.length > 0 && arr[d[0]][d[1]] !== "X") {
      dirs.push(d);
    }

    if (l.length > 0 && arr[l[0]][l[1]] !== "X") {
      dirs.push(l);
    }

    if (r.length > 0 && arr[r[0]][r[1]] !== "X") {
      dirs.push(r);
    }

    if (dirs.length > 1) {
      cnt++;
    }

    if (dirs.length > 0) {
      prev.push(p.join("-"));
      p = dirs.pop();

      if (dirs.length > 0) {
        backlog.push(...dirs);
        cnt_log.push(cnt);
      }
    } else {
      p = backlog.pop();
      cnt = cnt_log.pop();
    }
  }

  return cnt === k ? "Impressed" : "Oops!";
}
