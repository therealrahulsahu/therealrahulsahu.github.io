// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr2 = function(haystack, needle) {
    const len = haystack.length;
    const nLen = needle.length;

    const subMatch = i =>{
        if(i>=len){
            return -1;
        }else{
            if(len-i<nLen) return -1;
            let flag = true;
            for(let j=0; j<needle.length; j++){
                (haystack[i+j]!==needle[j])  && (flag = false);
            }
            return flag ? i : subMatch(i+1);
        }
    };

    return subMatch(0);
};

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};