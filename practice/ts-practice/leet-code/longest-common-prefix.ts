// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    const first = strs[0];
    if(strs.length===1 || first.length<=0) return first;
    let count = 0;
    let i=0;
    while(i<first.length){
        let flag = false;
        for(let j=1; j<strs.length; j++){
            if(first[i]!==strs[j][i]) flag = true;
        }
        if(flag) break;
        count++;
        i++;
    }
    return first.slice(0, count);
};