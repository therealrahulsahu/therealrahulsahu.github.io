// https://leetcode.com/problems/sum-of-left-leaves


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
var sumOfLeftLeaves = function(root) {
    let total = 0;

    const T = (node, isLeft) =>{
        if(node){
            if(!node.left && !node.right){
                total += isLeft ? node.val : 0;
            }else{
                T(node.left, true);
                T(node.right, false);
            }
        }
    };

    T(root, false);

    return total;  
};