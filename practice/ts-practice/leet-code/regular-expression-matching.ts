// https://leetcode.com/problems/regular-expression-matching/description/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchReg1 = function(s, p) {
    p = p.replace(/\*+/, '*');
    const reg = new RegExp('^'+p+'$');
    return reg.test(s);
};

var isMatchREg2 = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    const subMatch = (sPoi, pPoi)=>{
        if(sPoi===sLen && pPoi===pLen){
            return true;
        }else if(sPoi!==sLen && pPoi===pLen){
            return false;
        }else{
            if(p[pPoi]==='*'){  
                return subMatch(sPoi, pPoi+1);
            }else{
                if(p[pPoi+1]==='*'){  
                    let allCheck = subMatch(sPoi, pPoi+2);
                    let times = 0;
                    while(!allCheck && sPoi+times<sLen && (p[pPoi]==='.' || s[sPoi+times]===p[pPoi])){
                        allCheck = allCheck || subMatch(sPoi+1+times, pPoi+2);
                        times++;
                    }
                    return allCheck;
                }else{
                    if(p[pPoi]==='.' || s[sPoi]===p[pPoi]){  
                        return subMatch(sPoi+1, pPoi+1);
                    }else{
                        return false;
                    }
                }
            }
        }
    };
    return subMatch(0, 0);
}

const isMatchReg = (s, p) => {
    const hash = {};

    const isMatchHelper = (si, pi) => {
        if (pi >= p.length && si >= s.length) return true;
        const cached = hash[si * 100 + pi];
        if (cached == undefined) {
            const cimatch = si < s.length && pi < p.length && (s[si] === p[pi] || p[pi] === '.');
            if (pi + 1 < p.length && p[pi + 1] === '*') {
                var isM = (isMatchHelper(si, pi + 2)) || (cimatch && isMatchHelper(si + 1, pi));
                hash[si * 100 + pi] = isM;
                return isM;
            }

            const isM2 = cimatch && isMatchHelper(si + 1, pi + 1);
            hash[si * 100 + pi] = isM2;
            return isM2;
        }
        else {
            return cached;
        }
    }

    return isMatchHelper(0, 0);
};



console.log(isMatchReg('aa', 'a')); // false
console.log(isMatchReg('aa', 'a*')); // true
console.log(isMatchReg('abc', '.*')); // true
console.log(isMatchReg('aab', 'c*a*b')); // true
console.log(isMatchReg('mississippi', 'mis*is*p*.')); // false
console.log(isMatchReg('abc', 'a***')); // false