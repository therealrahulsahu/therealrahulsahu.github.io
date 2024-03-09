// https://leetcode.com/problems/ransom-note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const rCache = {};
    const mCache = {};

    for(let v of ransomNote){
        rCache[v] = (rCache[v]||0)+1;
    }
    for(let v of magazine){
        mCache[v] = (mCache[v]||0)+1;
    }
    for(let v of Object.keys(rCache)){
        if(rCache[v]>(mCache[v]||0)) return false;
    }
    return true
};