function checkSubarraySum2(nums: number[], k: number): boolean {
    let prefix = 0;
    const d = {0: 1};

    for(let ind = 0; ind<nums.length; ind++){
        const num = nums[ind];
        prefix += num;

        if(ind>0 && nums[ind-1] === 0 && nums[ind] === 0) return true;
        
        for(let n=1; ; n++){
            const base = prefix-n*k;
            if(base < 0) break;
            if(base in d) {
                if(ind>0 && (base!==prefix-nums[ind] || nums[ind-1]===0)){
                    return  true;   
                }
            }
        }
        d[prefix] = 1;       
    }
    return false;
};

function checkSubarraySum(nums: number[], k: number): boolean {
    let prefix = 0;
    const d = {0: 0};

    for(let i = 0; i<nums.length; i++){
        prefix += nums[i];
        const remainder = prefix%k;

        if(d[remainder]===undefined){
            d[remainder] = i+1;
        }else if(d[remainder]<i){
            return true;
        }
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)===true); // true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13)===false); // false
console.log(checkSubarraySum([5,0,0,0], 3)===true); // true
console.log(checkSubarraySum([1,2,12], 6)===false); // false
console.log(checkSubarraySum([1,3,0,6], 6)===true); // true