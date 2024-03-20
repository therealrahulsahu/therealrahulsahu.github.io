// https://leetcode.com/problems/excel-sheet-column-title


/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let resp = "";

    for(let n = columnNumber; n>0; n = Math.floor((n-1)/26)){
        resp = String.fromCharCode(((n-1)%26) + 65) + resp;
    }

    return resp;
};