// https://leetcode.com/problems/binary-tree-paths

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];

    const current = [];

    const add = ()=>{
        paths.push(current.join('->'));
    }

    const T = node=>{
        if(node){
            current.push(node.val);

            if(node.left===null && node.right===null){
                add();
            }else{
                T(node.left);
                T(node.right);
            }

            current.pop();
        }
    }

    T(root);

    return paths;
};