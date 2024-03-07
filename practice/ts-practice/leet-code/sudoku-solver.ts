var solveSudoku = function(board) {
    const size = board.length;
    
    const canPlace = (i, j, num)=>{
        for(let x=0;x<size;x++){
            if(board[i][x]==num || board[x][j]==num){
                return false;
            }
        }

        const rn = Math.floor(size**0.5);
        const sx = Math.floor((i/rn))*rn;
        const sy = Math.floor((j/rn))*rn;

        for(let x=sx; x<sx+rn; x++){
            for(let y=sy; y<sy+rn; y++){
                if(board[x][y]==num) return false;
            }
        }
        return true;
    };

    const Sudoku = (i, j)=>{
        
        if(i==size){
            // debugger;
            return true;
        }
        if(j==size){
            // debugger;
            return Sudoku(i+1, 0);
        }
        if(board[i][j]!='.'){
            // debugger;
            return Sudoku(i, j+1);
        }

        for(let num=1; num<=size; num++){
            if(canPlace(i, j, String(num))){
                // debugger;
                board[i][j] = String(num);
                // debugger;
                if(Sudoku(i, j+1)){
                    // debugger;
                    return true;
                }
            }
        }
        // debugger;
        board[i][j] = '.';
        // debugger;
        return false;
    };

    
    Sudoku(0, 0);
    return board;

};