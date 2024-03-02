// https://leetcode.com/problems/reverse-integer/submissions/1191430989/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x===0) return 0;
    let rev = 0;
    let abs = Math.abs(x);
    const sign = abs/x;
    while(abs>0){
        rev = rev*10+(abs%10);
        abs = Math.floor(abs/10);
    }
    if(rev>2147483648) return 0;
    return sign*rev;
};