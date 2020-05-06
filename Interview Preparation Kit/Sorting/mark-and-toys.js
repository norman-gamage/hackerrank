/**
 * Title          Mark and Toys
 * URL            https://www.hackerrank.com/challenges/mark-and-toys
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2020 May 07
 */

function maximumToys(prices, k) {
  prices = prices.filter((p) => p <= k).sort((a, b) => a - b);
  let output = 0;

  while (k > 0 && output <= prices.length) {
    k -= prices[output++];
  }

  return output - 1;
}
