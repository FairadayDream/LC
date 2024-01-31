/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function twoSum(nums, target) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i - 1] == target) {
//       output.push(i);
//     }
//   }
//   return output;
// }

// // @lc code=end
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected Output: [0, 1]

// console.log(twoSum([3, 2, 4], 6)); // Expected Output: [1, 2]

// console.log(twoSum([3, 3], 6)); // Expected Output: [0, 1]

// let largeInput = Array.from({ length: 10000 }, (_, i) => i + 1);
// console.log(twoSum(largeInput, 19999)); // Expected Output: [9998, 9999]

// console.log(twoSum([-1, -2, -3, -4, -5], -8)); // Expected Output: [2, 4]

function twoSum(nums, target) {
  if (nums.length <= 1) {
    return [];
  }
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++)
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
  }
  return output;
}

// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9)); // Expected Output: [0, 1]

console.log(twoSum([3, 2, 4], 6)); // Expected Output: [1, 2]

console.log(twoSum([3, 3], 6)); // Expected Output: [0, 1]

let largeInput = Array.from({ length: 10000 }, (_, i) => i + 1);
console.log(twoSum(largeInput, 19999)); // Expected Output: [9998, 9999]

console.log(twoSum([-1, -2, -3, -4, -5], -8)); // Expected Output: [2, 4]
