// https://leetcode.com/problems/search-insert-position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    const search = (i, end)=>{
        if(i===end){
            return nums[i]>=target ? i : i+1;
        }
        const mid = Math.floor((end+i)/2);
        if(nums[mid]<target){
            return search(mid+1, end);
        }else if(nums[mid]>target){
            return search(i, mid);
        }else{
            return mid;
        }
    };

  return search(0, nums.length-1);
};