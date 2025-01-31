package org.tour;

import java.util.*;

//class Dire{
//    Integer value;
//    Integer weight;
//    Dire(Integer value, Integer weight){
//        this.value = value;
//        this.weight = weight;
//    }
//}
//public class S10 {
//    Map<Integer, List<Dire>> graph = new HashMap<>();
//    Map<Integer, Integer> timeMap = new HashMap<>();
//
//    void addTime(int point, int time){
//        if(!timeMap.containsKey(point)){
//            timeMap.put(point, time);
//        }else{
//            timeMap.put(point, Math.min(time, timeMap.get(point)));
//        }
//    }
//
//    void genGraph(int[][] times, int n){
//        for(int i=0;i<n;i++) graph.put(i+1, new ArrayList<>());
//
//        for(int[] path:times) graph.get(path[0]).add(new Dire(path[1], path[2]));
//    }
//
//    Set<Integer> visited = new HashSet<>();
//    void addPath(int from, int to){
//        visited.add(from*1000+to);
//    }
//    boolean pathTaken(int from, int to){
//        return visited.contains(from*1000+to);
//    }
//    void dfs(int from){
//        from = from;
//        for(Dire node:graph.get(from)){
//            Integer to = node.value;
//            Integer wgt = node.weight;
//            if(!pathTaken(from, to)){
//                addPath(from, to);
//                addTime(to, wgt+timeMap.get(from));
//                dfs(to);
//            }
//        }
//    }
//
//    public int networkDelayTime(int[][] times, int n, int k) {
//        genGraph(times, n);
//        timeMap.put(k, 0);
//        dfs(k);
//        if(timeMap.size()==n){
//            Integer max = -1;
//            for(int i=0;i<n;i++) max = Math.max(max, timeMap.get(i+1));
//            return max;
//        }else return -1;
//    }
//
//    public static void main(String[] args) {
//        S10 s10 = new S10();
//        int[][] times = {{2,1,1},{2,3,1},{3,4,1}};
//        int n = 4;
//        int k = 2;
//
//        int[][] times = {{2,4,10},{5,2,38},{3,4,33},{4,2,76},{3,2,64},{1,5,54},{1,4,98},{2,3,61},{2,1,0},{3,5,77},{5,1,34},{3,1,79},{5,3,2},{1,2,59},{4,3,46},{5,4,44},{2,5,89},{4,5,21},{1,3,86},{4,1,95}};
//        int n = 5;
//        int k = 1;
//        System.out.println(s10.networkDelayTime(times, n, k));
//    }
//}



class Dire{
    Integer value;
    Integer weight;
    Dire(Integer value, Integer weight){
        this.value = value;
        this.weight = weight;
    }
}
class DireComparator implements Comparator<Dire>{
    public int compare(Dire d1, Dire d2){
        return d1.weight-d2.weight;
    }
}
public class S10 {
    Map<Integer, List<Dire>> graph = new HashMap<>();

    void genGraph(int[][] times, int n){
        for(int i=0;i<n;i++) graph.put(i+1, new ArrayList<>());

        for(int[] path:times) graph.get(path[0]).add(new Dire(path[1], path[2]));
    }

    Integer bfsToAllNodes(int n, int k){
        for(int i=1;i<=n;i++){
            timeSheet[i][i] = 0;
        }
        for(int i=0;i<n;i++){
            for(int node=1;node<=n;node++){
                List<Dire> neigh = graph.get(node);
                for(Dire dir:neigh){
                    Integer to = dir.value;
                    Integer wgt = dir.weight;
                    Integer[] toBeUpdatedSheet = timeSheet[node];
                    Integer[] compareFrom = timeSheet[to];
                    for(int v=1;v<=n;v++){
                        if(compareFrom[v]!=null){
                            if(toBeUpdatedSheet[v]==null){
                                toBeUpdatedSheet[v] = wgt + compareFrom[v];
                            }else{
                                toBeUpdatedSheet[v] = Math.min(toBeUpdatedSheet[v], wgt+compareFrom[v]);
                            }
                        }
                    }
                }
            }
        }
        Integer max = -1;
        for(int i=1;i<=n;i++){
            max = Math.max(max, timeSheet[k][i]);
        }
        return max;
    }

    Integer[][] timeSheet;
    public int networkDelayTime(int[][] times, int n, int k) {
        genGraph(times, n);
        timeSheet = new Integer[n+1][n+1];

        return bfsToAllNodes(n, k);
    }

    public static void main(String[] args) {
        S10 s10 = new S10();
//        int[][] times = {{2,1,1},{2,3,1},{3,4,1}};
//        int n = 4;
//        int k = 2;

        int[][] times = {{2,4,10},{5,2,38},{3,4,33},{4,2,76},{3,2,64},{1,5,54},{1,4,98},{2,3,61},{2,1,0},{3,5,77},{5,1,34},{3,1,79},{5,3,2},{1,2,59},{4,3,46},{5,4,44},{2,5,89},{4,5,21},{1,3,86},{4,1,95}};
        int n = 5;
        int k = 1;
        System.out.println(s10.networkDelayTime(times, n, k));
    }
}