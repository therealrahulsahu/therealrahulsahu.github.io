// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    
    let prefix = nums[0];
    const varset = new Set(nums);

    for(let i=1; i<nums.length; i++){
        if(nums[i-1]+1===nums[i]){
            prefix += nums[i];
        }else{
            break;
        }
    }

    for(let i=0; ;i++){
        if(!varset.has(prefix+i)) return prefix+i;
    }
};