/**
 * Title          Climbing the Leaderboard
 * URL            https://www.hackerrank.com/challenges/climbing-the-leaderboard
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 07
 */

const _ = require("lodash");

function climbingLeaderboard(scores, alice) {
  const arr = _.sortedUniq(scores.sort((a, b) => a - b));
  const len = arr.length + 1;

  for (let i = 0; i < m; i++) {
    log(len - _.sortedLastIndex(arr, alice[i]));
  }
}
