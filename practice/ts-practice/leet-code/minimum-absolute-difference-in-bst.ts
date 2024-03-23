// https://leetcode.com/problems/minimum-absolute-difference-in-bst

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
var getMinimumDifference = function(root) {
    const SAFE = 1e7;
    let min = SAFE;

    const diff = (a, b) => Math.min(a, Math.abs(b));

    const getDiff = node=>{
        let mn = SAFE;

        for(let left=node.left; left; left=left.right){
            if(!left.right){
                mn = diff(mn, node.val-left.val);
            }
        }

        for(let right=node.right; right; right=right.left){
            if(!right.left){
                mn = diff(mn, node.val-right.val);
            }
        }

        return mn;
                
    };

    const T = node=>{
        if(node){
            min = diff(min, getDiff(node));
            T(node.left);
            T(node.right);
        }
    };

    T(root);
    return min;
};