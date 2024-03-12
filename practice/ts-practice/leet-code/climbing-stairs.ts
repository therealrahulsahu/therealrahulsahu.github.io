// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const hash = {};
    
    const ways = i=>{
        if(hash[i]) return hash[i];
        else{
            if(i===n) return 1;
            else if(i>n) return 0;
            else{
                return hash[i] = (ways(i+1)+ways(i+2));
            }
        }
    };

    return ways(0);
};