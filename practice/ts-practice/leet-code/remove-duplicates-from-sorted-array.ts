// https://leetcode.com/problems/remove-duplicates-from-sorted-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const unq = [nums[0]];

    for(let i=1;i<nums.length;i++){
        if(nums[i-1] !== nums[i]) unq.push(nums[i]);
    }
    for(let i=0;i<nums.length;i++){
        nums[i] = unq[i];
    }
    return unq.length;
};

var removeDuplicates = function(nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};