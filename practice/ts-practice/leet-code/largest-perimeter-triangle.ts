// https://leetcode.com/problems/largest-perimeter-triangle/submissions/1193919814/

var largestPerimeter = function(nums) {
    nums.sort((a,b)=>b-a);

    for(let i=3;i<=nums.length;i++){

        if(nums[i-3] < nums[i-2] + nums[i-1]){
            return nums[i-3] + nums[i-2] + nums[i-1];
        }
    }

    return 0;
};