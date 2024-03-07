// https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku1 = function (board) {
    const subHash = {};
    const rowHash = {};
    const colHash = {};
    const setSubHash = (i, j, item) => {
        const index = Math.floor(i / 3) * 10 + Math.floor(j / 3);
        if(subHash[index]){
            subHash[index].add(item);   
        }else{
            subHash[index] = new Set([item]);
        }
    };
    const hasSubHash = (i, j, item)=>{
        const index = Math.floor(i / 3) * 10 + Math.floor(j / 3);
        return subHash[index] && subHash[index].has(item);
    };
    const setRowHash = (i, j, item) => {
        rowHash[i] ? rowHash[i].add(item) : rowHash[i] = new Set([item]);
    };
    const hasRowHash = (i, j, item) => {
        return rowHash[i] && rowHash[i].has(item);
    };
    const setColHash = (i, j, item) => {
        colHash[j] ? colHash[j].add(item) : colHash[j] = new Set([item]);
    };
    const hasColHash = (i, j, item) => {
        return colHash[j] && colHash[j].has(item);
    };

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++){
            const item = board[i][j];
            if(item !== '.'){
                if(hasSubHash(i, j, item) || hasRowHash(i, j, item) || hasColHash(i, j, item)){
                    return false;
                }else{
                    setSubHash(i, j, item);
                    setRowHash(i, j, item);
                    setColHash(i, j, item);
                }
            }
        }
    }
    return true;
};

var isValidSudoku = function (board) {
    const hash = {};

    const set = (i, j, item) => {
        const block = Math.floor(i / 3) * 10 + Math.floor(j / 3);
        const row = (i+1) * 100;
        const col = (j+1) * 1000;
        hash[block] ? hash[block].add(item) : hash[block] = new Set([item]);
        hash[row] ? hash[row].add(item) : hash[row] = new Set([item]);
        hash[col] ? hash[col].add(item) : hash[col] = new Set([item]);
    };
    const has = (i, j, item) => {
        const block = Math.floor(i / 3) * 10 + Math.floor(j / 3);
        const row = (i+1) * 100;
        const col = (j+1) * 1000;
        return (hash[block] && hash[block].has(item)) || (hash[row] && hash[row].has(item)) || (hash[col] && hash[col].has(item));
    }

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++){
            const item = board[i][j];
            if(item !== '.'){
                if(has(i, j, item)){
                    return false;
                }else{
                    set(i, j, item);
                }
            }
        }
    }
    return true;
};

// @ts-ignore
const su1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
    [".", "9", "8", ".", ".", ".", ".", "6", "."], 
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
    [".", "6", ".", ".", ".", ".", "2", "8", "."], 
    [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const su2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."], 
    ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
    [".", "9", "8", ".", ".", ".", ".", "6", "."], 
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
    [".", "6", ".", ".", ".", ".", "2", "8", "."], 
    [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const su3 = [
    [".","8","7","6","5","4","3","2","1"],
    ["2",".",".",".",".",".",".",".","."],
    ["3",".",".",".",".",".",".",".","."],
    ["4",".",".",".",".",".",".",".","."],
    ["5",".",".",".",".",".",".",".","."],
    ["6",".",".",".",".",".",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    ["8",".",".",".",".",".",".",".","."],
    ["9",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(su1)===true);
console.log(isValidSudoku(su2)===false);
console.log(isValidSudoku(su3)===true);