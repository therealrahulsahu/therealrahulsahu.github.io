// https://leetcode.com/problems/a-number-after-a-double-reversal/submissions/1191436472/

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    if(num===0) return true;
    return num%10!==0;
};