/*
 * @lc app=leetcode id=123 lang=javascript
 *console.log(
 * [123] Best Time to Buy and Sell Stock III
 */
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

let maxProfit = function (prices) {
  let MaxProfitFirstTransaction = 0; //DP track
  //BaseCase
  if (prices.length <= 1) {
    return 0;
  }
  for (let i = 0; i <= prices.length; i++) {
    let ele = prices[i];
    let maxprofit = 0;
    if (ele + prices[1] > maxprofit) {
      MaxProfitFirstTransaction++;
    } else if()
  }
  return MaxProfitFirstTransaction;
};eqw
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6
console.log(maxProfit([1, 2, 3, 4, 5])); //Output: 4
console.log(maxProfit([7, 6, 4, 3, 1])); //Output: 0
// @lc code=end
