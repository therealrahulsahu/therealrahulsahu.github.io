// https://leetcode.com/problems/find-the-k-or-of-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    
    let ans = 0;

    for(let n=0; n<32; n++){
        let base = 2**n;
        let count = 0;
        for(let i of nums){
            if(base&i) count++;
            if(count>=k) break;
        }
        ans += (count>=k?base:0);
    }

    return ans;

};