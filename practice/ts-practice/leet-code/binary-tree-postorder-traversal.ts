// https://leetcode.com/problems/binary-tree-postorder-traversal

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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const out = [];

    const T = node=>{
        if(node){
            T(node.left);
            T(node.right);
            out.push(node.val)
        }
    }
    
    T(root);

    return out;
};