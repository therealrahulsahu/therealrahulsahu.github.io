package org.tour;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
 }
public class Solution7 {
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while(!queue.isEmpty()){
            int len = queue.size();
            HashSet<Integer> sib = new HashSet<>();

            while(len-->0){
                TreeNode top = queue.poll();
                sib.add(top.val);

                if(sib.contains(x) && sib.contains(y)) return true;

                if(top.left!=null) queue.offer(top.left);
                if(top.right!=null) queue.offer(top.right);
            }

        }

        return false;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1,
                new TreeNode(2,
                        null,
                        new TreeNode(4)
                ),
                new TreeNode(3,
                        null,
                        null
                )
        );

        Solution7 sol = new Solution7();
        System.out.println(sol.isCousins(root, 2, 3));
    }
}
