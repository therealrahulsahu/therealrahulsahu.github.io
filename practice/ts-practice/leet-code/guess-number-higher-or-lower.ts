// https://leetcode.com/problems/guess-number-higher-or-lower

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    let l=1,r=n;
    while(l<=r){
        const mid = Math.floor((l+r)/2);
        // @ts-ignore
        const gs = guess(mid);
        if(gs<0){
            r = mid;
        }else if(gs>0){
            l = mid+1;
        }else{
            return mid;
        }
    }   
    return -1;
};