// https://leetcode.com/problems/invert-binary-tree

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    const T = node => {
        if(node){
            const temp = node.left;
            node.left = node.right;
            node.right = temp;

            T(node.left);
            T(node.right);
        }
    };

    T(root);
    return root;
};