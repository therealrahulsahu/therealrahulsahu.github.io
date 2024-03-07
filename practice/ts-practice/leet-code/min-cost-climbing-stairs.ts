// https://leetcode.com/problems/min-cost-climbing-stairs

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    const cache = new Array(cost.length);

    const minCost = i =>{
        return cache[i] ? cache[i] : ( cache[i] = i<len ? ((cost[i]||0) + Math.min(minCost(i+1), minCost(i+2))) : 0 );
        
    };

    return minCost(-1);

};
