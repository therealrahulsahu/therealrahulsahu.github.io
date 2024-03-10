// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n===0) return false;
    return Number.isInteger(Math.log10(n)/Math.log10(3));
};