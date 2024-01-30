/*helper func - example
data input transform - const words = const splitWord = input.split(' ');
Output variable initialization - const answer = [];
Base Case - if (splitWord.length === 0) return answer;
whats the energy flow/action, - for loop - for(let i = 0; i < num; i++)
whats the rock/conditions statement - let el = array.pop();
Falsey statement - if (el) answer.push(el);
Output transform- answer.join('');`
*/

/* Given an integer array nums, find the subarray with the largest sum, and return its sum. */
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function func(nums) {
  if (nums.length === 0) return 0;
  for (let i = 1; i <= nums.length; i++) {
    let ele = nums[0] + nums[1];

    if (i === nums.length) {
      return i;
    }
  }
  return maxSum;
}

// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
console.log(func([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
console.log(func([1]));
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
console.log(func([5, 4, -1, 7, 8]));

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/* Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */
