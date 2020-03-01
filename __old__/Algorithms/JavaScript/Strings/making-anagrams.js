/**
 * Title          Making Anagrams
 * URL            https://www.hackerrank.com/challenges/making-anagrams
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

function makingAnagrams(s1, s2) {
  const common = Array.from(new Set((s1 + s2).split("").sort())).join("");
  let cnt = 0;

  for (let i = 0; i < common.length; i++) {
    let c = common[i],
      regex = new RegExp(c, "g"),
      s1Cnt = s1.length - s1.replace(regex, "").length,
      s2Cnt = s2.length - s2.replace(regex, "").length;

    if (s1Cnt !== s2Cnt) {
      cnt += Math.abs(s1Cnt - s2Cnt);
    }
  }

  return cnt;
}
