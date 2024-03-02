// https://leetcode.com/problems/reverse-bits/submissions/1191203175/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits1 = function(n) {
    const rev = n.toString(2).padStart(32, '0').split('').toReversed().join('');
    return parseInt(rev, 2);
};

var reverseBits2 = function(n) {
    const rev = n.toString(2).padStart(32, '0');
    let res = '';
    for(let ch of rev){
        res = ch + res;
    }
    return parseInt(res, 2);
};

var reverseBits = function(n) {
    let result = 0;
    let count = 32;

    while(count--){
        result *= 2;
        result += n & 1;
        n = n >> 1
    }
    return result;

};

console.log(reverseBits(43261596)===964176192); // 964176192