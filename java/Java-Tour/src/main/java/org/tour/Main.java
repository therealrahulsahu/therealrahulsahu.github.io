package org.tour;

public class Main {
    public static void main(String[] args) {
        Integer i = 0;
        System.out.println(i);

        Main.test(i);
        System.out.println(i);
    }

    private static void test(Integer i){
        i=i+1;
    }
}