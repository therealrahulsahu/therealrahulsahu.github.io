// https://leetcode.com/problems/pascals-triangle-ii

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow1 = function(rowIndex) {
    const fac = n => n<2 ? 1 : n*fac(n-1);
    const comb = (n,r) => fac(n) / (fac(r)*fac(n-r));

    const arr = [];
    for(let i=0; i<=rowIndex; i++){
        arr.push(comb(rowIndex, i));
    }
    return arr;
};



var getRow = function(rowIndex) {
    const ans = new Array();
    ans.push(1);
   for(let i = 1 ; i<=rowIndex; i++){
        for(let j = i-1;  j>0 ; j--){
            ans[j]= ans[j]+ans[j-1];
        }
        ans.push(1);
    }
    return ans;
};