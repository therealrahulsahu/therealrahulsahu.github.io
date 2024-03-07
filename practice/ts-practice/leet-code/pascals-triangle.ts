// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function(numRows) {
    const rows = [[1]];

    for(let i = 1 ; i<numRows; i++){
        const ans = [1];
        for(let j = i-1;  j>0 ; j--){
            ans[j] = rows[i-1][j] + rows[i-1][j-1];
        }
        ans.push(1);
        rows.push(ans);
    }
    
    return rows;
};

var generate = function(numRows) {
    const fac = n => n<2 ? 1 : n*fac(n-1);
    const comb = (n,r) => fac(n) / (fac(r)*fac(n-r));

    const arr = [];
    for(let i=0; i<numRows; i++){
        const row = []
        for(let j=0; j<=i; j++){
            row.push(comb(i, j));
        }
        arr.push(row);
    }
    return arr;
};