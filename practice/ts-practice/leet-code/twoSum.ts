function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target) return [i, j];
        }
    }
    return []
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumOp = function(nums:number[], target:number) {
    const diff:{[key:number]:[number, number]} = {};
    for(let i=0;i<nums.length;i++){
        const x = nums[i]
        const y = target - x;
        diff[i] = [x, y];
    }
    console.log(diff);
    
    const keys:any = Object.keys(diff);
    console.log(keys);

    for(let i=0; i<keys.length-1; i++){
        for(let j=i+1; j<keys.length; j++){
            if(diff[keys[i]][0]===diff[keys[j]][1]) return [keys[i], keys[j]];
        }
    }
    return [];
};

function twoSumH(nums: number[], target: number): number[] {
    const diff:any = {};
    for(let i in nums){
        diff[target-nums[i]] = i;
    }
    for(let i in nums){
        if(diff[nums[i]] && i!=diff[nums[i]]){
            return [i, diff[nums[i]]];
        }
    }
    return [];
};

console.log(twoSumH([1,3,4,2], 6)); // [0,1]


