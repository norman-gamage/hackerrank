/**
 * Title          Stock Maximize
 * URL            https://www.hackerrank.com/challenges/stockmax
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2018 Jan 09
 */

function stockmax(prices) {
  const n = prices.length;
  let maxProfit = 0;

  for (let j = 0; j < n - 1; j++) {
    let buy = prices[j];
    let max = 0;
    const arrMax = Math.max(...prices.slice(j));

    while (prices[j] !== arrMax) {
      maxProfit += arrMax - prices[j];
      j++;
    }
  }

  return maxProfit;
}
