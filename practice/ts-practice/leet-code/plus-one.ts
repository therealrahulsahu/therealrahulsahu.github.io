// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i]===9){
            digits[i] = 0;
            carry = 1;
        }else{
            digits[i]++;
            carry = 0;
            break;
        }
    }
    if(carry) digits.unshift(1);
    return digits;
};