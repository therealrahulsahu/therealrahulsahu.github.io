// https://leetcode.com/problems/find-the-difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let v of s){
        t = t.replace(v, '');
    }
    return t;
};