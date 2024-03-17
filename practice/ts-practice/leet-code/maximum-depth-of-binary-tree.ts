// https://leetcode.com/problems/maximum-depth-of-binary-tree

(()=>{

    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    var maxDepth = function(root) {
        
        const depth = node=> node ? 1+Math.max(depth(node.left), depth(node.right)) : 0;
        return depth(root);
    };



})()