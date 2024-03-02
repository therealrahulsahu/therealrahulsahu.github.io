// https://leetcode.com/problems/palindrome-number/submissions/1191139732/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    
    let rev = 0;
    let iter = x;
    while(iter>0){
        rev = rev*10+iter%10;
        iter = Math.floor(iter/10);
    }
    return x===0 || x===rev;
};