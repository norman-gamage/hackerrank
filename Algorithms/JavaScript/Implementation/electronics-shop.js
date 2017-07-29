/**
 * Title          Electronics Shop
 * URL            https://www.hackerrank.com/challenges/electronics-shop
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2017 May 15
 */

function getMoneySpent(keyboards, drives, s) {
  let arr = [];

  keyboards.forEach(k => {
    drives.forEach(d => {
      if (k + d <= s) {
        arr.push(k + d);
      }
    });
  });

  return ((arr.length === 0) ? -1 : arr.sort((a, b) => b - a)[0]);
}