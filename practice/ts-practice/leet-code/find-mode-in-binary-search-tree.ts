// https://leetcode.com/problems/find-mode-in-binary-search-tree

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
var findMode = function(root) {
    const freq = {};
    let count = 0;

    const T = node=>{
        if(node){
            
            freq[node.val] = 1 + (freq[node.val] ? freq[node.val] : 0);
            count = Math.max(freq[node.val], count);

            T(node.left);
            T(node.right);
        }
    };

    T(root);

    const data = [];
    for(let k in freq){
        if(freq[k]===count){
            data.push(k);
        }
    }

    return data;
};