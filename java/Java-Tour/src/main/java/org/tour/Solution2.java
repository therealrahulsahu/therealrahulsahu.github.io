package org.tour;

import java.util.SortedSet;
import java.util.TreeSet;

public class Solution2 {
    public String removeDuplicateLetters(String s) {
        SortedSet<Character> ss = new TreeSet<>();

        for(Character c: s.toCharArray()){
            ss.add(c);
        }

        String result = "";
        for(Character c: ss){
            result += c;
        }

        return result;
    }
}
