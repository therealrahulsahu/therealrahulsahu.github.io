package org.tour;

import java.util.*;
import javafx.util.Pair;

public class Solution2737 {
    List<Pair<Integer, Integer>>[] graph;

    void genGraph(int n, List<List<Integer>> edges){
        graph = new List[n];
        for(int i=0;i<n;i++) graph[i] = new ArrayList<>();

        for(List<Integer> edge: edges){
            graph[edge.get(0)].add(new Pair<>(edge.get(1), edge.get(2)));
        }
    }

    void bfs(int[] distances, int from){
        Queue<Pair<Integer, Integer>> pq = new PriorityQueue<>(Comparator.comparing(Pair::getValue));

        distances[from] = 0;
        pq.offer(new Pair<>(from, 0));

        while(!pq.isEmpty()){
            Pair<Integer, Integer> top = pq.poll();
            from = top.getKey();

            for(Pair<Integer, Integer> neigh: graph[top.getKey()]){
                Integer to = neigh.getKey();
                Integer wgt = neigh.getValue();
                if(distances[from]+wgt<distances[to]){
                    distances[to] = distances[from]+wgt;
                    pq.offer(neigh);
                }
            }
        }
    }

    public int minimumDistance(int n, List<List<Integer>> edges, int s, int[] marked) {
        genGraph(n, edges);

        int[] distances = new int[n];
        Arrays.fill(distances, Integer.MAX_VALUE);

        bfs(distances, s);

        int least = Integer.MAX_VALUE;
        for(int m:marked){
            least = Math.min(least, distances[m]);
        }
        return least==Integer.MAX_VALUE?-1:least;
    }

    public static void main(String[] args) {
        Solution2737 sol = new Solution2737();
        int n = 4;
        List<List<Integer>> edges = new ArrayList<>();
        edges.add(Arrays.asList(0, 1, 1));
        edges.add(Arrays.asList(1, 2, 3));
        edges.add(Arrays.asList(2, 3, 2));
        edges.add(Arrays.asList(0, 3, 4));
        int s = 0;
        int[] marked = {2,3};
        System.out.println(sol.minimumDistance(n, edges, s, marked));
    }
}