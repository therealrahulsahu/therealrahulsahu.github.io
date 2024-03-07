// https://leetcode.com/problems/power-of-two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log2(n));
};