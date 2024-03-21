// https://leetcode.com/problems/excel-sheet-column-number


/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let col = 0;
    const len = columnTitle.length;

    for(let i=0; i<len; i++){
        const bk = len-1-i;
        const code = columnTitle.charCodeAt(bk)-64;
        col += code * (26**i);
    }

    return col;
};