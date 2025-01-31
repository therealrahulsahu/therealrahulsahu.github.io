package org.tour;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class S9 {
    private int distance(int x1, int y1, int x2, int y2){
        return Math.abs(x1-x2)+Math.abs(y1-y2);
    }
    private boolean outOfBound(int[][] grid, int x, int y){
        return x<0 || y<0 || x>=grid.length || y>=grid[0].length;
    }
    private Integer getKey(int x, int y){
        return x*100+y;
    }
    private int getX(int key){
        return key/100;
    }
    private int getY(int key){
        return key%100;
    }

    private void findAllOnes(int[][] grid, List<Integer> all1s){
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]==1) all1s.add(getKey(i, j));
            }
        }
    }


    int[] dir = {-1, 0, 1, 0, -1};
    private void dfs(int[][] grid, int x, int y, boolean[][] visited){
        if(outOfBound(grid, x, y) || grid[x][y]==2 || visited[x][y]) return;

        if(grid[x][y]==1){
            count1++;
            visited[x][y]=true;
        }else{
            visited[x][y]=true;
            for(int i=0;i<4;i++){
                dfs(grid, x+dir[i], y+dir[i+1], visited);
            }
        }
    }

    Map<Integer, Map<Integer, Integer>> cache = new HashMap<>();
    private void setValue(int x, int y, int tX, int tY, int val){
//        0 {1,1,1,1,1,0},
//        1 {0,0,0,0,0,1},
//        2 {0,1,1,0,0,1},
//        3 {1,0,0,1,0,1},
//        4 {1,0,1,0,0,1},
//        5 {1,0,0,0,0,1},
//        6 {0,1,1,1,1,0}
        int fKey = getKey(x, y);
        int tKey = getKey(tX, tY);

        if(!cache.containsKey(fKey)) cache.put(fKey, new HashMap<>());

        cache.get(fKey).put(tKey, val);
    }
    private int getValue(int x, int y, int tX, int tY){
        int fKey = getKey(x, y);
        int tKey = getKey(tX, tY);

        Map<Integer, Integer> from = cache.get(fKey);
        if(from!=null){
            Integer val = from.get(tKey);
            if(val!=null) return val;
        }

        return -1;
    }

    private int shortPath(int[][] grid, int x, int y, int tX, int tY, int tillNow){
        if(x==tX && y==tY) return tillNow;

        if(outOfBound(grid, x, y) || grid[x][y]!=0) return -1;

        int memo = getValue(x, y, tX, tY);
        if(memo!=-1) return tillNow+memo;

        int mn = 100000;
        for(int i=0;i<4;i++){
            grid[x][y] = 100;
            int nxt = shortPath(grid, x+dir[i], y+dir[i+1], tX, tY, tillNow+1);
            grid[x][y] = 0;
            if(nxt!=-1){
                mn = Math.min(mn, nxt);
            }
        }

        if(mn!=100000) setValue(x, y, tX, tY, mn-tillNow);
        return mn;
    }

    private int distanceAll(int[][] grid, int x, int y, List<Integer> all1s){
        int total = 0;
        for(Integer point:all1s){
            total += shortPath(grid, x, y, getX(point), getY(point), 0);
        }
        return total;
    }

    private int zeroDis(int[][] grid, List<Integer> all1s, boolean[][] visited){
        int least = 1000000;
        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]==0 && visited[i][j]){
                    least = Math.min(least, distanceAll(grid, i, j, all1s));
                }
            }
        }
        return least;
    }

    int count1 = 0;
    public int shortestDistance(int[][] grid) {
        List<Integer> all1s = new ArrayList<>();
        findAllOnes(grid, all1s);

        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){
                if(grid[i][j]==0){
                    count1=0;
                    boolean[][] visited = new boolean[grid.length][grid[0].length];
                    dfs(grid, i, j, visited);
                    if(count1==all1s.size()){
                        return zeroDis(grid, all1s, visited);
                    }
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        S9 s9 = new S9();
//        int[][] grid = {
//            {1,0,2,0,1},
//            {0,0,0,0,0},
//            {0,0,1,0,0}
//        };
//        int[][] grid = {
//                {1}
//        };
        int [][] grid = {
            {1,1,1,1,1,0},
            {0,0,0,0,0,1},
            {0,1,1,0,0,1},
            {1,0,0,1,0,1},
            {1,0,1,0,0,1},
            {1,0,0,0,0,1},
            {0,1,1,1,1,0}
        };
        System.out.println(s9.shortestDistance(grid));
    }
}