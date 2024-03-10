// https://leetcode.com/problems/power-of-four

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n==0) return false;
    return (Math.log2(n)/2)%1===0;
};