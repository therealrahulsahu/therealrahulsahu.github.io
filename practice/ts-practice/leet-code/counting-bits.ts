// https://leetcode.com/problems/counting-bits

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const rs = [];
    for(let i=0;i<=n;i++){
        const bn = i.toString(2);
        rs.push((bn.match(/1/g)||[]).length);
    }
    return rs;
};

