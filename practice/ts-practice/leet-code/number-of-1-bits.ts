// https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight1 = function(n) {
    return n.toString(2).match(/1/g)?.length||0;
};

var hammingWeight2 = function(n) {
    let count = 0;
    while(n){
        if(n%2) count++;
        n = Math.floor(n/2);
    }
    return count;
};

var hammingWeight = function(n) {
    let count = 0;
    const nmS = n.toString(2);
    for(let i=0; i<nmS.length; i++){
        if(nmS[i] === '1') count++;
    }
    return count;
};

console.log(hammingWeight(11)); // 3