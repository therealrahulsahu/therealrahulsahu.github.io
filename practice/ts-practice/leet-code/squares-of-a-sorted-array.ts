// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares1 = function(nums) {
    const stack = [];
    const result = [];

    for(let n of nums){
        if(n<0){
            stack.unshift(n*n);
        }else{
            while(stack[0] <= n*n) result.push(stack.shift()); 
            result.push(n*n);
        }
    }

    while(stack[0])result.push(stack.shift());

    return result;
};

var sortedSquares2 = function(nums) {
    return nums.map(v=>v*v).toSorted((a,b)=>a-b);
};

var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1;

    const result = new Array(nums.length);

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-1])); // [1]
console.log(sortedSquares([-6,-5,-4,-1]));