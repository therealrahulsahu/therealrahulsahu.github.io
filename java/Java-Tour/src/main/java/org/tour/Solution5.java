package org.tour;

import java.util.*;

public class Solution5 {
    HashMap<Integer, ArrayList<Integer>> map = new HashMap<>();
    HashMap<Integer, ArrayList<Integer>> mapR = new HashMap<>();

    void addDir(Integer from, Integer to){
        map.get(from).add(to);
        mapR.get(to).add(from);
    }

    void addAllNodes(Integer n){
        for(Integer i=0;i<n;i++) map.put(i, new ArrayList<>());
        for(Integer i=0;i<n;i++) mapR.put(i, new ArrayList<>());
    }

    Boolean checkParents(int edges[][]){
        HashSet<Integer> parent = new HashSet<>();
        for(int[] edge:edges){
            if(parent.contains(edge[1])) return true; else{
                parent.add(edge[1]);
            }
        }
        return false;
    }

    Integer validateNode(HashMap<Integer, ArrayList<Integer>> tree, Integer from){
        Stack<Integer> stack = new Stack<>();
        HashSet<Integer> visited = new HashSet<>();

        stack.push(from);
        visited.add(from);

        while(!stack.isEmpty()){
            Integer top = stack.pop();

            Iterator<Integer> paths = tree.get(top).iterator();
            while(paths.hasNext()){
                Integer path = paths.next();

                if(visited.contains(path)){
                    return -1;
                }else{
                    visited.add(path);
                    stack.push(path);
                }
            }
        }

        return visited.size();
    }

    public boolean validTree(int n, int[][] edges) {
        // if(checkParents(edges)) return false;

        addAllNodes(n);

        for(int[] edge: edges){
            addDir(edge[0], edge[1]);
        }

        Integer mx = -1;
        for(Integer i=0;i<n;i++){
            Integer treeSize = validateNode(map, i);
            if(treeSize==-1) return false; else{
                mx = Math.max(mx, treeSize);
            }
            Integer treeSizeR = validateNode(mapR, i);
            if(treeSizeR==-1) return false; else{
                mx = Math.max(mx, treeSizeR);
            }
        }

        return n==mx;
    }
}