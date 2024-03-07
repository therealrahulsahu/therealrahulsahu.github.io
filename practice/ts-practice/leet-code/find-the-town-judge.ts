// https://leetcode.com/problems/find-the-town-judge
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    if(n===1) return 1;
    const setA = new Set();
    const countB = {};

    for (let [a, b] of trust) {
        setA.add(a);
        countB[b] = (countB[b]||0)+1;
    }
    if(setA.size===n) return -1;
    const keyN = Object.keys(countB).filter(key=>countB[key]===n-1);
    for(let key of keyN){
        if(!setA.has(key)) return key;
    }
    return -1;
};