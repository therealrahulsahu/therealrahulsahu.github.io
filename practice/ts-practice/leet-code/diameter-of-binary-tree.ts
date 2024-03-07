// https://leetcode.com/problems/diameter-of-binary-tree/submissions/1196348064/

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
var diameterOfBinaryTree = function(root) {
    
    let highest = 0;

    const getDepth = node =>{
        if(node){
            let [L, R] = [getDepth(node.left), getDepth(node.right)];
            highest = Math.max(highest, L+R);
            return Math.max(L, R)+1;
        }else{  
            return 0;
        }
    };

    getDepth(root);
    return highest;
};