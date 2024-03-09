// https://leetcode.com/problems/is-subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let i=0;
    for(let j=0;i<s.length && j<t.length;j++){
        (s[i]===t[j]) && i++;
    }
    return i>=s.length;
};