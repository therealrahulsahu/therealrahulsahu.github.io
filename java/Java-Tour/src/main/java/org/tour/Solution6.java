package org.tour;

public class Solution6 {
    int[] rc = {-1, 0, 1, 0, -1};
    int peri = 0;

    int isWater(int[][] grid, int r, int c){
        return r<0 || c<0 || r>=grid.length || c>=grid[0].length || grid[r][c]==0 ? 1:0;
    }

    void dfs(int[][] grid, int r, int c){
        if(r<0 || c<0 || r>=grid.length || c>=grid[0].length || grid[r][c]!=1) return;

        grid[r][c] = -1;

        for(int i=0;i<rc.length-1;i++){
            peri += isWater(grid, r+rc[i], c+rc[i+1]);
            dfs(grid, r+rc[i], c+rc[i+1]);
        }
    }

    public int islandPerimeter(int[][] grid) {
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]==1){
                    dfs(grid, i, j);
                    return peri;
                }
            }
        }
        return 0;
    }
}
