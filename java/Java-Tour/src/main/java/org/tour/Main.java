package org.tour;

import javafx.util.Pair;

import java.util.*;

public class Main {

    int R=0,C=1;

    static int[] getLoc(int key){
        int row = (n-1)-((key-1)/n);
        int col;
        if(((key-1)/n)%2==0){
            col = (key-1)%n;
        }else{
            col = (n-1) - (key-1)%n;
        }
        return new int[]{row, col};
    }
    static int n;

    public static void main(String[] args) {
        Map<Integer, List<Integer>> map = new HashMap<>();

        List<Integer> list = new ArrayList<>();
        list.add(7);
        map.put(1, list);

        map.computeIfAbsent(1, k->new ArrayList<>()).add(8);
        map.computeIfAbsent(1, k->new ArrayList<>()).add(9);

        System.out.println(map);
    }

}