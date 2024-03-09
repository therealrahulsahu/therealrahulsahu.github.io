// https://leetcode.com/problems/first-bad-version

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const cache = {};
        const isBad = val=> cache[val] ? cache[val] : (cache[val] = isBadVersion(val));

        if(isBad(1)) return 1;

        for(let st=2,end=n;;){
            const mid = Math.floor((st+end)/2);
            if(!isBad(mid-1) && isBad(mid)){
                return mid;
            }else{
                if(mid===st){
                    if(st===end){
                        return st;
                    }else{
                        return isBad(st)?st:st+1;
                    }
                }else if(!isBad(mid)){
                    st = mid+1;
                }else{
                    end = mid-1;
                }
            }
        }

    };
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;

        while (l !== r) {
            const m = Math.floor((r + l) / 2);
            const isBad = isBadVersion(m);

            if (isBad) {
                r = m
            } else {
                l = m + 1;
            }
        }

        return l;
    };
};