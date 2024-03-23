// https://leetcode.com/problems/k-diff-pairs-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs1 = function(nums, k) {
    const unq = new Set();

    const compare = (a,b)=>{
        const abs = Math.abs(a-b);
        if(abs===k){
            unq.add(`${a}-${b}`);
            unq.add(`${b}-${a}`);
        }
    }

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            compare(nums[i], nums[j]);
        }
    }

    return k==0 ? unq.size : unq.size/2;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) return 0;
    let uniqueNums = new Set(nums);
    let count = 0;

    if (k === 0) {
        let frequencyMap = nums.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
        for (let num in frequencyMap) {
            if (frequencyMap[num] > 1) count++;
        }
    } else {
        uniqueNums.forEach(num => {
            if (uniqueNums.has(num + k)) count++;
        });
    }

    return count;
};