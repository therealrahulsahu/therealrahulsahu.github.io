// https://leetcode.com/problems/majority-element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let mxItem;
    let mxCount = 0;

    for(let v of nums){
        hash[v] = (hash[v] ? hash[v]:0) + 1;

        if(hash[v]>mxCount){
            mxItem = v;
            mxCount = hash[v];
        }
    }

    return mxItem;
};

