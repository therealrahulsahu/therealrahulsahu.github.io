package org.tour;

import java.util.HashSet;
import java.util.LinkedList;

class Solution3 {

    Boolean isO(char[][] board, Integer i, Integer j){
        return board[i][j]=='O';
    }

    Integer getHash(Integer i, Integer j){
        return i*1000+j;
    }

    Integer getI(Integer hash){
        return hash/1000;
    }

    Integer getJ(Integer hash){
        return hash%1000;
    }

    HashSet<Integer> edgeR = null;

    void markSurrounding(char[][] board, Integer p, Integer k){
        Integer hash = this.getHash(p, k);
        LinkedList<Integer> queue = new LinkedList<>();
        HashSet<Integer> done = new HashSet<>();

        queue.addLast(hash);
        done.add(hash);

        while(!queue.isEmpty()){
            Integer len = queue.size();

            while(len-->0){
                Integer top = queue.removeFirst();

                Integer i = this.getI(top);
                Integer j = this.getJ(top);

                this.marked[i][j] = true;

                if(i>0 && this.isO(board, i-1, j) && null==this.marked[i-1][j] && !done.contains(this.getHash(i-1, j))){
                    queue.addLast(this.getHash(i-1, j));
                    done.add(this.getHash(i-1, j));
                }
                if(j<this.col-1 && this.isO(board, i, j+1) && null==this.marked[i][j+1] && !done.contains(this.getHash(i, j+1))){
                    queue.addLast(this.getHash(i, j+1));
                    done.add(this.getHash(i, j+1));
                }
                if(i<this.row-1 && this.isO(board, i+1, j) && null==this.marked[i+1][j] && !done.contains(this.getHash(i+1, j))){
                    queue.addLast(this.getHash(i+1, j));
                    done.add(this.getHash(i+1, j));
                }
                if(j>0 && this.isO(board, i, j-1) && null==this.marked[i][j-1] && !done.contains(this.getHash(i, j-1))){
                    queue.addLast(this.getHash(i, j-1));
                    done.add(this.getHash(i, j-1));
                }
            }
        }
    }

    Integer row;
    Integer col;
    Boolean[][] marked;

    public void solve(char[][] board) {
        this.row = board.length;
        this.col = board[0].length;
        this.marked = new Boolean[this.row][this.col];

        for(Integer j=0;j<this.col;j++){
            if(this.isO(board, 0, j) && null==this.marked[0][j]){
                this.markSurrounding(board, 0, j);
            }
            if(this.isO(board, this.row-1, j) && null==this.marked[this.row-1][j]){
                this.markSurrounding(board, this.row-1, j);
            }
        }
        for(Integer i=1;i<this.row-1;i++){
            if(this.isO(board, i, 0) && null==this.marked[i][0]){
                this.markSurrounding(board, i, 0);
            }
            if(this.isO(board, i, this.col-1) && null==this.marked[i][this.col-1]){
                this.markSurrounding(board, i, this.col-1);
            }
        }

        for(Integer i=1; i<this.row-1; i++){
            for(Integer j=1; j<this.col-1; j++){
                if(this.isO(board, i, j) && null==this.marked[i][j]){
                    board[i][j] = 'X';
                }
            }
        }
    }

    public static void main(String[] args) {
        Solution3 solution = new Solution3();

        char[][] board = new char [][] {
                {'O','O','O','O','O','O','O','O','X','O','O','O','O','O','X','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O','O','O'},
                {'X','O','O','X','O','X','O','O','O','O','X','O','O','X','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','X','X','O'},
                {'O','X','X','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','X','O','O','O','O','O','O','X','O','O','O','O','O','X','X','O'},
                {'O','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','O','O','O','O','O','X','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','X','O'},
                {'O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','X','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','O','O'},
                {'X','O','O','O','O','O','O','O','O','X','X','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','O','O','O','X','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','X','O','O','O','O','O','O','O','O','X','O','O','O','O','O','X'},
                {'O','O','O','O','O','X','O','O','O','O','O','O','O','O','O','X','O','X','O','O'},
                {'O','X','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O'},
                {'O','O','O','O','O','O','O','O','X','X','O','O','O','X','O','O','X','O','O','X'},
                {'O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O'}
        };

        solution.solve(board);

        System.out.println("Done!");
    }
}
